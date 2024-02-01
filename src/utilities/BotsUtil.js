// Add a new bot
export const addBot = (bots, setBots) => {
  const newBotId = bots.length + 1;
  const newBot = { id: newBotId, status: "IDLE" };
  setBots((prev) => [...prev, newBot]);
};

// Remove a bot
export const removeBot = (
  bots,
  setBots,
  processingOrders,
  setPendingOrders,
  setProcessingOrders,
  setRemovingOrder
) => {
  const lastBot = bots[bots.length - 1];
  if (lastBot && lastBot.status !== "IDLE") {
    handleBotRemovalAndOrder(
      lastBot,
      processingOrders,
      setPendingOrders,
      setProcessingOrders,
      setRemovingOrder
    );
  }
  setBots((prev) => prev.slice(0, -1));
};

const handleBotRemovalAndOrder = (
  bot,
  processingOrders,
  setPendingOrders,
  setProcessingOrders,
  setRemovingOrder
) => {
  // Extract order ID from the status
  const orderId = parseInt(bot.status.match(/\d+/)[0], 10);

  // Find the order being processed by the last bot
  const orderToReturn = processingOrders.find((order) => order.id === orderId);

  if (orderToReturn) {
    setPendingOrders((prev) => [orderToReturn, ...prev]); //Add the order back to Pending Order list
    setProcessingOrders((prev) => prev.filter((order) => order.id !== orderId));
    setRemovingOrder((prev) => [...prev, orderToReturn]);
  }
};

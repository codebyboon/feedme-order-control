/**
 * * Utilities/Methods being used for Bots
 * * addBot => Add new bot into the bot list
 * * removeBot => Remove the last bot from the bot list
 * * handleBotRemovalAndOrder => Handle bot removal when they are in the midst of processing order
 */

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
  // Extract order ID from the bot status
  const orderId = parseInt(bot.status.match(/\d+/)[0], 10);

  // Find the order being processed by the last bot
  const orderToReturn = processingOrders.find((order) => order.id === orderId);

  if (orderToReturn) {
    setPendingOrders((prev) => [orderToReturn, ...prev]); //Add the order back to Pending Order list
    setProcessingOrders((prev) => prev.filter((order) => order.id !== orderId)); //Remove the order from Processing Order list
    setRemovingOrder((prev) => [...prev, orderToReturn]); //Add the order into the Removing Order list
  }
};

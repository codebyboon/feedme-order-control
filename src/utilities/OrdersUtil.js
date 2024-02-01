export const addOrder = (
  orderType,
  lastOrderId,
  pendingOrders,
  setPendingOrders,
  setLastOrderId
) => {
  const newOrder = { id: lastOrderId, type: orderType };

  /**
   * * Check if the order type is Normal or VIP.
   * * If it is Normal order, add the order to the last of the list.
   * * If it is VIP order, add the order to the last of VIP but before Normal orders.
   */
  if (orderType === "Normal") {
    setPendingOrders((prev) => [...prev, newOrder]);
  } else if (orderType === "VIP") {
    let lastVIPOrderIdx = -1; // -1 so that the first VIP order will be added to position 0
    let insertIdx = 0;

    // Find out the last VIP order position
    for (let i = 0; i < pendingOrders.length; i++) {
      if (pendingOrders[i].type === "VIP") {
        lastVIPOrderIdx = i;
      }
    }

    if (lastVIPOrderIdx >= 0) {
      insertIdx = lastVIPOrderIdx + 1; //Update the index to insert after the last of VIP order.
    }
    setPendingOrders((prev) => [
      ...prev.slice(0, insertIdx), // To get the current VIP order list
      newOrder, // To add the new order in the position after current VIP order list
      ...prev.slice(insertIdx),
    ]); // To add the remaining order list
  }
  setLastOrderId(lastOrderId + 1);
};

export const removeOrder = (
  completedOrders,
  removingOrder,
  setCompletedOrders,
  setRemovingOrder
) => {
  const updatedCompletedOrders = completedOrders.filter(
    (order) => !removingOrder.some((removing) => removing.id === order.id)
  );

  setCompletedOrders(updatedCompletedOrders);

  const updatedRemovingOrder = removingOrder.filter(
    (order) => !completedOrders.some((completed) => completed.id === order.id)
  );
  setRemovingOrder(updatedRemovingOrder);
};

// Process order
export const processOrder = (
  bots,
  pendingOrders,
  setPendingOrders,
  setProcessingOrders,
  setCompletedOrders
) => {
  if (pendingOrders.length === 0) return;

  const idleBot = bots.find((bot) => bot.status === "IDLE");
  if (!idleBot) return;

  // Process the first order in the queue
  let orderToProcess = pendingOrders[0];

  setPendingOrders((prev) => prev.slice(1));
  setProcessingOrders((prev) => [...prev, orderToProcess]);

  idleBot.status = "Busy processing Order " + orderToProcess.id;

  // Simulate order processing time to take 10 seconds to finish
  setTimeout(() => {
    setProcessingOrders((prevProcessOrders) => {
      if (prevProcessOrders.some((order) => order.id === orderToProcess.id)) {
        setCompletedOrders((prevCompleted) => [
          ...prevCompleted,
          orderToProcess,
        ]);
      }
      return prevProcessOrders.filter((order) => order.id !== orderToProcess);
    });

    idleBot.status = "IDLE";
    // }
  }, 10000);
};

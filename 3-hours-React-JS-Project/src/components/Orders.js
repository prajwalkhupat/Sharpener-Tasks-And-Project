import React from "react";
import './Orders.css';

const Orders = ({ orderList, deleteOrder }) => {
  function clickHandler(orderId) {
    deleteOrder(orderId);
  }

  const renderOrdersForTable = (table) => {
    return orderList.map((order) => {
      if (order.table === table) {
        return (
          <li key={order.orderId}>
            {order.price}-{order.table}-{order.dish}{" "}
            <button onClick={() => clickHandler(order.orderId)}>
              Delete Order
            </button>
          </li>
        );
      }
      return null;
    });
  };

  return (
    <div className="orders">
      <h2>Orders</h2>
      <h3>Table 1</h3>
      <ul>{renderOrdersForTable("table1")}</ul>
      <h3>Table 2</h3>
      <ul>{renderOrdersForTable("table2")}</ul>
      <h3>Table 3</h3>
      <ul>{renderOrdersForTable("table3")}</ul>
    </div>
  );
};

export default Orders;




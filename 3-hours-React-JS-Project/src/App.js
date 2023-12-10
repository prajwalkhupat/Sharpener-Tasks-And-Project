

import React, { useState, useEffect } from "react";
import OrderForm from "./components/OrderForm";
import Orders from "./components/Orders";
import './App.css';

function App() {
  const [orderList, setOrderList] = useState([]);

  // saving orderList items in localStorage
  useEffect(() => {
    orderList.forEach((order) => {
      localStorage.setItem(order.orderId, JSON.stringify(order));
    });
  }, [orderList]);

  // loading data from local storage to orderList
  useEffect(() => {
    const loadedOrderList = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const orderData = JSON.parse(localStorage.getItem(key));
        if (orderData) {
          loadedOrderList.push(orderData);
        }
      } catch (error) {
        console.error("Error parsing order data:", error);
      }
    }
    setOrderList(loadedOrderList);
  }, []);

  function addOrderList(orderDetail) {
    setOrderList((prevValue) => {
      return [...prevValue, orderDetail];
    });
  }

  function deleteOrder(orderId) {
    setOrderList((prevValue) => {
      return prevValue.filter((order) => order.orderId !== orderId);
    });
    // removes order item from local storage
    localStorage.removeItem(orderId);
  }

  return (
    <div className="main">
      <h1>HOTEL ORDER DETAILS</h1>
      <OrderForm addOrderList={addOrderList} />
      <Orders orderList={orderList} deleteOrder={deleteOrder} />
    </div>
  );
}

export default App;

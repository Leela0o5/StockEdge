import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://stockedge.onrender.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
        setOrders([]);
      });
  }, []);

  const styles = {
    container: {
      padding: "2rem",
      fontFamily: "'Inter', 'Helvetica', sans-serif",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
    },
    orderList: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "1.5rem",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    },
    heading: {
      marginBottom: "1rem",
      fontSize: "1.2rem",
      fontWeight: 600,
      color: "#212529",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.95rem",
      color: "#333",
    },
    th: {
      textAlign: "left",
      padding: "12px 10px",
      backgroundColor: "#f1f3f5",
      fontWeight: 500,
      borderBottom: "1px solid #dee2e6",
      color: "#495057",
    },
    td: {
      padding: "12px 10px",
      borderBottom: "1px solid #e9ecef",
    },
    trHover: {
      backgroundColor: "#f8f9fa",
    },
    noOrders: {
      textAlign: "center",
      padding: "3rem 1rem",
    },
    noOrdersText: {
      fontSize: "1.1rem",
      marginBottom: "1rem",
      color: "#6c757d",
    },
    btn: {
      display: "inline-block",
      padding: "0.6rem 1.2rem",
      backgroundColor: "#4caf50",
      color: "white",
      borderRadius: "4px",
      textDecoration: "none",
      fontWeight: 500,
      transition: "background 0.2s ease",
    },
  };

  return (
    <div style={styles.container}>
      {orders.length === 0 ? (
        <div style={styles.noOrders}>
          <p style={styles.noOrdersText}>You haven't placed any orders today</p>
          <Link to="/" style={styles.btn}>
            Get started
          </Link>
        </div>
      ) : (
        <div style={styles.orderList}>
          <h2 style={styles.heading}>Your Orders</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Qty</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} style={index % 2 === 0 ? {} : styles.trHover}>
                  <td style={styles.td}>{order.name}</td>
                  <td style={styles.td}>{order.qty}</td>
                  <td style={styles.td}>₹{order.price}</td>
                  <td style={styles.td}>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;

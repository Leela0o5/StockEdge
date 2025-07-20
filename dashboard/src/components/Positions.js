import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPosition] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allPositions").then((res) => {
      setAllPosition(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <style>{`
        .title {
          font-size: 18px;
          font-weight: 600;
          margin: 20px 0 10px;
        }

        .table-container {
          overflow-x: auto;
          background: white;
          border: 1px solid #eee;
          border-radius: 4px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
          font-size: 14px;
        }

        th, td {
          padding: 10px 12px;
          text-align: left;
          border-bottom: 1px solid #f0f0f0;
          white-space: nowrap;
        }

        th {
          background: #fafafa;
          color: #666;
          font-weight: 500;
        }

        .profit {
          color: #4caf50;
        }

        .loss {
          color: #f44336;
        }

        @media (max-width: 600px) {
          table {
            min-width: 650px;
          }
        }
      `}</style>

      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.Product}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allHoldings").then((res) => {
      setAllHoldings(res.data);
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

        .summary {
          display: flex;
          flex-wrap: wrap;
          margin-top: 24px;
          gap: 12px;
        }

        .summary-box {
          flex: 1 1 30%;
          min-width: 180px;
          background: #fafafa;
          padding: 16px;
          border-radius: 6px;
          text-align: center;
          border: 1px solid #eee;
        }

        .summary-box h5 {
          margin: 0;
          font-size: 18px;
        }

        .summary-box p {
          margin-top: 6px;
          font-size: 13px;
          color: #888;
        }

        @media (max-width: 600px) {
          table {
            min-width: 650px;
          }

          .summary {
            flex-direction: column;
            align-items: center;
          }

          .summary-box {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const pnl = currValue - stock.avg * stock.qty;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="summary">
        <div className="summary-box">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="summary-box">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="summary-box">
          <h5 className="profit">1,553.40 (+5.20%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;

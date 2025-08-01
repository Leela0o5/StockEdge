import React, { useState, useContext } from "react";
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";
import { DonutChart } from "./DonutChart";

const WatchList = () => {
  const labels = watchlist.map((subArr) => subArr["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <style>{`
        .watchlist-container {
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 0 4px 1px #eee;
          background: #fff;
        }

        .search-container {
          position: relative;
          padding: 10px;
        }

        .search {
          width: 100%;
          padding: 10px 14px;
          border: none;
          border-bottom: 1px solid #ddd;
          font-size: 0.9rem;
        }

        .search:focus {
          outline: none;
        }

        .counts {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.8rem;
          color: #aaa;
        }

        .list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .list li {
          padding: 12px 16px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.2s ease;
        }

        .list li:hover {
          background: #f9f9f9;
          cursor: pointer;
        }

        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .item p {
          margin: 0;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .up {
          color: #4caf50;
        }

        .down {
          color: #f44336;
        }

        .itemInfo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
        }

        .price {
          font-weight: 500;
        }

        @media (max-width: 600px) {
          .item p {
            font-size: 0.85rem;
          }

          .itemInfo {
            font-size: 0.75rem;
            gap: 6px;
          }

          .price {
            font-size: 0.8rem;
          }

          .counts {
            font-size: 0.7rem;
          }
        }
          
      `}</style>

      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
            className="search"
          />
          <span className="counts">{watchlist.length} / 50</span>
        </div>

        <ul className="list">
          {watchlist.map((stock, index) => (
            <WatchListItem stock={stock} key={index} />
          ))}
        </ul>
        <DonutChart data={data} />
      </div>
    </>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <span className="actions">
      <span className="inline-actions">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchList;

import styled from "@emotion/styled";
import { useState } from "react";
import { ArrowIconDown, ArrowIconUp } from "./Icons";

export const Collapse = ({ date, amount, total, products, address }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Collapsed>
      <div className="content">
        <p>{date}</p>
        <div>
          <span>{`${amount} items`}</span>
          <span>{`$${total}`}</span>
        </div>
      </div>

      <div
        className={`collapse-content ${isCollapsed ? "expanded" : "collapsed"}`}
        aria-expanded={isCollapsed}
      >
        <div className="Order">
          <h3>Order</h3>
          <div>
            <li>
              <span> 1- veggie tomato mix </span> <span>{`$${15.45}`}</span>
            </li>
            <li>
              <span> 1- veggie tomato mix </span> <span>{`$${15.45}`}</span>
            </li>
          </div>
        </div>
        <div className="Delivery">
          <h3>Delivery</h3>
          <span>{address}</span>
        </div>
      </div>

      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? <ArrowIconUp /> : <ArrowIconDown />}
      </button>
    </Collapsed>
  );
};

const Collapsed = styled.div`
  width: 75vw;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .content {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 10px;
    color: gray;
    div {
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      & :last-child {
        color: orange;
        font-weight: bold;
      }
    }
  }
  .Order {
    list-style: none;
    margin-top: 15px;
    margin-bottom: 10px;
    div {
      border-bottom: 0.5px solid gray;
      padding-bottom: 20px;
      li {
        color: gray;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
      }
    }
  }
  .Delivery {
    padding: 15px 2px;
    span {
      color: gray;
    }
  }
  button {
    margin-top: 5px;
    cursor: pointer;
    align-self: flex-end;
    background-color: transparent;
    border: none;
    svg {
      width: 20px;
    }
  }
  .collapse-content.collapsed {
    display: none;
  }
  .collapsed-content.expanded {
    display: flex;
  }
  .text-format {
    text-align: left;
    font-size: 14px;
    line-height: 17px;
  }
`;

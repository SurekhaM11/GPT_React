"use client";
import React from "react";
import { connect } from "react-redux";

let balance = (props) => {
  return <div>balance{props.wallet_balance}</div>;
};

balance = connect(function (state) {
  const { wallet_balance } = state?.appReducer;
  console.log("bal:", wallet_balance);
  return {
    wallet_balance: wallet_balance,
  };
})(balance);

export default balance;

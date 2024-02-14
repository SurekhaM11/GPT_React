const { init } = require("@/utils/init");

export const appReducer = (state = init, action) => {
  switch (action.type) {
    case "BAL_UPDATE":
      return { ...state, wallet_balance: action.payload };
  }
  return state;
};

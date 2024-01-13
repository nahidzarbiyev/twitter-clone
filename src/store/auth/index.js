import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  currentAccount: {
    id: 1,
    username: "ichbinnahid",
    avatar:
      "https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    fullname: "nah IT𝕏",
  },
  accounts: [
    {
      id: 1,
      username: "ichbinnahid",
      avatar:
        "https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      fullname: "nah IT𝕏",
    },
    {
      id: 2,
      username: "thisiszarbiyeff",
      avatar:
        "https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      fullname: "nahid Zarbiyev",
    },
    {
      id: 3,
      username: "sultansulnini",
      avatar:
        "https://pbs.twimg.com/profile_images/1650064651332222976/gfCqGzd3_400x400.jpg",
      fullname: "Bakinski sultan suleyman",
    },
  ],
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccounts: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload
    }
  }

});
export const { _addAccounts, _setCurrentAccount, _removeAccount } =
  auth.actions;

export default auth.reducer;

import { useSelector } from "react-redux";


// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAccount = ()=>useSelector(state=>state.auth.currentAccount)
export const useAccounts = ()=>useSelector(state=>state.auth.accounts)
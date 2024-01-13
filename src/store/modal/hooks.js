import { useSelector } from "react-redux";


// eslint-disable-next-line react-hooks/rules-of-hooks
export const useModal = ()=>useSelector(state=>state.modal.modal)
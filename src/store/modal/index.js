import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  modal: false,
};
const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    _setModal: (state, action) => {
      state.modal = action.payload
    },
    _removeModal: (state) => {
      
    state.modal = false
    },

  },
});
export const { _setModal,_removeModal } =
  modal.actions;

export default modal.reducer;

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    count:0
  },
  reducers: {
    increment: function (state) {
      state.count += 1;
    },
    decrement : function(state){
      state.count -= 1;
    }
  },

});


export default counterSlice.reducer;
export const {increment,decrement} = counterSlice.actions 

// {
//   loading : false
// }
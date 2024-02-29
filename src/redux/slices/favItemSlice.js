import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = Cookies.get('favItem') ?{...JSON.parse(Cookies.get('favItem')),isLoading:true}:{
    isLoading:true,
    savedItems:[]
}


const favItemSlice = createSlice({
    name: "favItem",
  initialState,
  reducers:{
    addItemToFevList(state, action){
        if (
            state.savedItems.findIndex(
              (item) => item.key === action.payload.key
            ) === -1
          ){
            state.savedItems =[...state.savedItems,action.payload]
          }
          Cookies.set('favItem',JSON.stringify(state))
    },
    removeItemFromList(state, action){
        let indexItem = state.savedItems.findIndex(
            (item) => item.key === action.payload.key
          );
          if (indexItem !==-1){
            let filterdFav = state.savedItems.filter(
                (item) => item.key !== action.payload.key
              );
        
              state.savedItems = filterdFav;
          }

          Cookies.set('favItem',JSON.stringify(state))
    },
    hideLoadingFav: (state) => {
        state.isLoading = false
      },
  }
})


export const { addItemToFevList, removeItemFromList,hideLoadingFav } = favItemSlice.actions;

export default favItemSlice.reducer;
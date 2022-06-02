import { createSlice } from "@reduxjs/toolkit";

const cardz = [];
const cardSlice = createSlice({
    name:"TodoApp",
    initialState:{
        cardz,
        id:0
    },
    reducers:{
        addCard:(state,action)=>{
            let cardObject = {
                id:state.id,
                title:action.payload,
                list:[]
            }
            state.cardz.push(cardObject);
        },
        addItem:(state,action)=>{
            let list_Id = action.payload.id;
            let item = action.payload.item;
            state.cardz[list_Id].list.push(item)
        },
        deleteCard:(state,action)=>{
            state.cardz.splice(action.payload,1)
        },
        deleteItem:(state,action)=>{
            state.cardz[action.payload.object].list.splice(action.payload.item,1)
        }
    }
})

export const { addCard,addItem,deleteCard,deleteItem } = cardSlice.actions;
export default cardSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"

const itemsSlice = createSlice({
    name: "list",
    initialState: [],
    reducers: {
        addItem(state: any, action: any){
            state.push(action.payload)
        },
        removeItem(state:any, action:any){
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
})


export const { addItem, removeItem } = itemsSlice.actions
export default itemsSlice.reducer
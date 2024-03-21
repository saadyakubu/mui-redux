import { configureStore } from "@reduxjs/toolkit"
import itemsReducer from "../features/items/itemsSlice"

// const itemsSlice = createSlice({
//     name: "list",
//     initialState: [],
//     reducers: {
//         addItem(state: any, action: any){
//             state.push(action.payload)
//         },
//         removeItem(state:any, action:any){
//             const index = state.indexOf(action.payload)
//             state.splice(index, 1)
//         }
//     },
// })

const store = configureStore({
    // reducer: {
    //     items: itemsSlice.reducer
    // }
    reducer: {
        items: itemsReducer
    }
})

export { store }
// export const { addItem, removeItem } = itemsSlice.actions
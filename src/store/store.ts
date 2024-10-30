import {configureStore, createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:'product',
    initialState: {productList: [], details:[], pin: ""},
    reducers: {
        addProduct: (state:any, action) => {
            state.productList.unshift(action.payload.productList);
        },
        addDetail: (state:any, action) => {
            state.details.unshift(action.payload.details)
        },
        auth: (state:any, action) => {
            state.pin = action.payload.passcode
        },
        dltProduct: (state:any, action) => {
            state.productList = [...action.payload.filterFoodList]
        }
    }
})

const productStore = configureStore({reducer: {
    product: productSlice.reducer
}});

export const productActions = productSlice.actions;

export default productStore;
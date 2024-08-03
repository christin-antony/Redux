import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Reducer"
export default configureStore ({
    reducer:{
        counter:counterReducer
    }
})
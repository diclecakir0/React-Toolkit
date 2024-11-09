import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice"

export default configureStore({
	reducer: {counterReducer},
});

// configure store expects an options object as a parameter
// Within the object, define the reducer as the value for the reducer key
// When there are multiple reducers, it includes them within an object in the reducer key.
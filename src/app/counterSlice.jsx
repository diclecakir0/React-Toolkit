import { createSlice } from "@reduxjs/toolkit";

/*
! Instead of creating reducers and actions in separate files, we'll create them in the slice file.

? Slice Setup:
* 1- Import the createSlice method
* 2- Define the necessary parameters
* > > name : Slice name
* > > initialState: Initial state
* > > reducers{} : We will define the actions and the updates they will make to the store
*/

const initialState = {
	count: 0,
};

const counterSlice = createSlice({
	name: 'count',
	initialState,
	reducers: {
		increase: (state) => {
			state.count +=1;
		},
		decrease: (state) => {
			state.count -=1;
		},
		// When we want to use the payload values, we take action as a parameter.
		setCount: (state, action) => {
			state.count = action.payload;
		},

	},
});

//  Export the actions from within the counterSlice
export const {increase, decrease, setCount} = counterSlice.actions;
//  Export the reducer created by createSlice
export default counterSlice.reducer;
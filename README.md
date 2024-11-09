Redux Toolkit

Benefits:

- It contains less code compared to Redux
- It comes with thunk built-in
- Thanks to the DevTools extension, we can monitor the store, reducers, and actions while developing the project
- Data management is easier

Libraries:

@reduxjs/toolkit
react-redux

Installation Steps:

Create a slice
slice: It includes both reducers and actions
Slice Setup:
1- Import the createSlice method
2- Define the necessary parameters
name : slice name
initialState: Initial state
reducers{} : We will define the actions and the effects they will have on the store
Create store.js

- Thunk is included by default inside configureStore
- We can use thunk without installing any additional libraries
- It automatically combines the reducers within itself
- Introduce the reducers to the store

The store is exported

The store is introduced to the project in main.js (using Provider)

# React-Toolkit

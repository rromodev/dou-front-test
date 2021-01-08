import { configureStore, createSlice } from "@reduxjs/toolkit";
import { SPACE_TO_MOVE } from '../utils/constants.js'

const positionSlice = createSlice({
  name: "position",
  initialState: {
    areaWidth: 0,
    areaHeight: 0,
    imageWidthLimit: 0,
    imageHeightLimit: 0,
    imageWidth: 0,
    imageHeight: 0,
    X: 0,
    Y: 0
  },
  reducers: {
    moveUP: state => {
      let toMove = state.Y - SPACE_TO_MOVE > state.imageHeightLimit 
        ? SPACE_TO_MOVE : state.Y - state.imageHeightLimit  
      state.Y = state.Y - toMove
    },
    moveDOWN: state => {
      let toMove = state.Y + state.imageHeightLimit + SPACE_TO_MOVE < state.areaHeight 
        ? SPACE_TO_MOVE : state.areaHeight - state.imageHeightLimit - state.Y  
      state.Y = state.Y + toMove
    },
    moveLEFT: state => {
      let toMove = state.X - SPACE_TO_MOVE > state.imageWidthLimit 
        ? SPACE_TO_MOVE : state.X - state.imageWidthLimit   
      state.X = state.X - toMove
    },
    moveRIGHT: state => {
      let toMove = state.X + state.imageWidthLimit + SPACE_TO_MOVE < state.areaWidth 
        ? SPACE_TO_MOVE : state.areaWidth - state.imageWidthLimit - state.X 
      state.X = state.X + toMove
    },
    init: (state, action) => {
      
      state.areaWidth = action.payload.areaWidth, 
      state.areaHeight = action.payload.areaHeight, 
      state.imageWidth = action.payload.imageWidth,
      state.imageHeight = action.payload.imageHeight

      state.X = state.areaWidth / 2
      state.Y = state.areaHeight / 2

      state.imageWidthLimit = state.imageWidth / 2
      state.imageHeightLimit = state.imageHeight / 2

    }
  }
});

export const store = configureStore({
  reducer: positionSlice.reducer
});

const { actions, reducer } = positionSlice;

export const { moveUP, moveDOWN, moveLEFT, moveRIGHT, init } = actions;
export const positionSelector = state => state;
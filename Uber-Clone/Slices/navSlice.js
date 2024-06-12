import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orgin: null,
  destination:null,
  travelTimeInformation:null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrgin: (state,action) => {
      state.orgin = action.payload
    },
    setDestination: (state,action) => {
      state.destination = action.payload
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOrgin, setDestination, setTravelTimeInformation } = navSlice.actions;
export  const selectOrgin = (state)=> state.nav.orgin;
export  const selectDestination = (state)=> state.nav.destination;
export  const selectTravelTimeInformation = (state)=> state.nav.travelTimeInformation;

export default navSlice.reducer
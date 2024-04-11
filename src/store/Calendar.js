// import {create} from 'zustand'
import {
    INITIAL_EVENTS,
  cards,
  cardsData,
  ordersData,
  groupNumber,
  boardData,
  userData
} from '../data/data'
// console.log(INITIAL_EVENTS,"INITIAL_EVENTS")
// const useCalendar=create((set)=>({
//     currentEvents:INITIAL_EVENTS,
//     setCurrentEvents:(events)=>set({currentEvents:events})
// }))
// export default useCalendar;
import {configureStore, createSlice} from '@reduxjs/toolkit'
const event={calendarEvents:INITIAL_EVENTS,}
const calendarSlice=createSlice({
    name:'Calendar',
    initialState:event,
    reducers:{
        setCurrentEvents(state,action){
            console.log(state.calendarEvents,action.payload)
            state.calendarEvents=action.payload
        }
    }
})
const board={boardData:boardData}
const boardSlice=createSlice({
    name:'Board',
    initialState:board,
    reducers:{
        setBoardData(state,action){
            state.boardData=action.payload
        }
    }
})
const store=configureStore({
    reducer:{calendar:calendarSlice.reducer,board:boardSlice.reducer}
})
export const boardActions=boardSlice.actions
export const calendarActions=calendarSlice.actions;
export default store;

import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./CounterSlice"
import timerSlice from "./TimerSlice"

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        timer: timerSlice.reducer,
    }
})

export default store
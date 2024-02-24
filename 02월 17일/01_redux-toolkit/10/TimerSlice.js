import { createSlice } from "@reduxjs/toolkit"

const timerSlice = createSlice({
    name: 'timer',
    initialState: { hour: 1, min: 2, sec: 3 },
    reducers: {
        INC: () => {},
        DEC: () => {}
    }
})

export default timerSlice
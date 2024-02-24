import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: { value: 1, aa: 2, bb: 3 },
    reducers: {
      ADD: (state, action) => {
        state.value = state.value + action.payload
      },
      SUB: () => {},
      RESET: () => {},
      CHECKED: () => {},
    }
  })

export default counterSlice
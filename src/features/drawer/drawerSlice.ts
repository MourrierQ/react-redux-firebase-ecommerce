import { createSlice } from "@reduxjs/toolkit";

interface drawerState {
    visible: boolean
}

const initialState : drawerState = {
    visible: false
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggleDrawer: (state) => {
            state.visible = !state.visible
        }
    }
})

export const {toggleDrawer} = drawerSlice.actions

export default drawerSlice.reducer
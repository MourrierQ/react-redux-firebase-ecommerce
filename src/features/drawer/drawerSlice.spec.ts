import drawerReducer, { toggleDrawer } from "./drawerSlice";

describe('drawer reducer', () => {
    it('should handle toggleDrawer', () => {
        expect(drawerReducer(undefined, toggleDrawer()))
        .toEqual({visible: true})
    })
})
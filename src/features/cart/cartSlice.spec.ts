import cartReducer, { addProduct, toggleVisible } from "./cartSlice";

describe('cart reducer', () => {
    it('should handle initial state', () => {
        expect(cartReducer(undefined, {type: 'unknown'}))
        .toEqual({products: [], visible: false})
    });

    it('should handle addProduct', () => {
        expect(cartReducer(undefined, addProduct({name: 'Test'})))
        .toEqual({products: [{name: "Test"}], visible: false})
    })

    it('should handle toggleVisible', () => {
        expect(cartReducer(undefined, toggleVisible()))
        .toEqual({products: [], visible: true})
    })
})
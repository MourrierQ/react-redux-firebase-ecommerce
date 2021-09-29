export function fetchCartItems() {
    return new Promise<{data: {name: String}[]}>((resolve) => {
        return setTimeout(() => resolve({data: [{name: "Prout"}, {name: "Zboobs"}]}))
    })
}
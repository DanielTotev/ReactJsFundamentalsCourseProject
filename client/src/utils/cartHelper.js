let cartItems = [];

export default {
    addItem: (item) => {
        cartItems.push(item)
    },
    getItems: () => cartItems.slice(0),
    removeItem: (id) => {
        cartItems = cartItems.filter(x => x._id !== id);
    }
};
const { default: axiosClient } = require("./axiosClient");

const addToCart = (payload) => axiosClient.post('/carts',payload)

const getUserCartItems = (email) => axiosClient.get(`carts?populate[products][populate]=banner&filters[email][$eq]=${email}`)

const removeItemFromList = (id) => axiosClient.delete(`/carts/${id}`)

export default {
    addToCart,
    getUserCartItems,
    removeItemFromList
}
const { default: axiosClient } = require("./axiosClient");


const getLasttestProducts = () => axiosClient.get('/products?populate=*') // Tutti i prodotti
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`) // Prodotti singolo usando l'ID
const getProductCategory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
export default {
    getLasttestProducts,
    getProductById,
    getProductCategory
}
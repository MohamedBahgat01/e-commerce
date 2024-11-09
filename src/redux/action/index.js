// for add item to cart
export const addCart = (product) => {
    return{
        type : "ADDCART",
        payload : product
    };
}
// for Delete item from cart
export const delCart = (product) => {
    return{
        type : "DELCART",
        payload : product
    };
}
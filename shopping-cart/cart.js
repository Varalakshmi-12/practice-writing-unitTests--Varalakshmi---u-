function addItem(cart,item,quantity){
    if (!item || typeof item !='string' || quantity <= 0 || !Number.isInteger(quantity) ){
        return cart;
    }
    if (cart[item]){
        cart[item]+=quantity;
    } else {
        cart[item]= quantity;
    }
    return cart;

}
function removeItem(cart,item){
    if ( !item || typeof item != 'string' || !cart[item]){
        return cart;
    }
    delete cart[item];
    return cart;

}
function getTotalItems(cart){
    return Object.values(cart).reduce((Total,quantity) =>Total+quantity ,0);

}

module.exports={
    addItem,
    removeItem,
    getTotalItems
}
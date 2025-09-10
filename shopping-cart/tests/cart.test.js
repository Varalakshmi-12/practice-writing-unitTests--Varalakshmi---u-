const { addItem, removeItem, getTotalItems } = require('../cart');

describe ('shopping cart module',()=>{
    let cart;
    beforeEach(()=>{
        cart={};
    })



    //addItem tests
    describe('addItem',()=>{
        test ('should add new item with valid item and quantity',()=>{
            addItem(cart,'apple',5);
            expect(cart).toEqual({apple:5});
        })
        test ('should add quatity to existing item',()=>{
            addItem(cart,'apple',2);
            addItem(cart,'apple',6);
            expect(cart).toEqual({apple:8});
        })
        test ('should ignore negative quantity',()=>{
            addItem(cart,'apple',-2);
            expect(cart).toEqual({});
        })
        test ('should ignore no item',()=>{
            addItem(cart,'',2);
            expect(cart).toEqual({});
        })
        test ('should ignore with decimal quantity',()=>{
            addItem(cart,'apple',2.5);
            
            expect(cart).toEqual({});
        })
    })

    //removeItem tests
    describe('removeItem',()=>{
        test('should remove item from cart',()=>{
            cart={apple:3,banana:2};
            removeItem(cart,'banana');
            expect(cart).toEqual({apple:3});
        })
        test('should do nothing when item not found',()=>{
            cart={apple:3,banana:2};
            removeItem(cart,'orange');
            expect(cart).toEqual({apple:3,banana:2});
        })
    })

    //getTotalItems test
    describe('getTotalItems',()=>{
        test('should return total',()=>{
            cart={apple:5,banana:5};
            expect(getTotalItems(cart)).toBe(10);
        })
    })
})
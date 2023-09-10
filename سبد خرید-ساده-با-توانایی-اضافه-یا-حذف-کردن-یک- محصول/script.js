let productsArr = [{name : 'milk' , price : 1.3 , inventory : 3} ,
{name : 'hot sauce' , price : 2 , inventory : 7} ,
{name : 'cheese' , price : 4.99 , inventory : 8} , 
{name : 'beer' , price : 6.44 , inventory : 0} ,
{name : 'iceCream' , price : 0.99 , inventory : 20} ,
{name : 'snacks' , price : 2.57 , inventory : 7} ,
{name : 'jelly' , price : 3.21 , inventory : 9}];

let customerShoppingCart = [{name : 'hot sauce' , price : 2 , inventory : 7} , 
{name : 'snacks' , price : 2.57 , inventory : 7} ,
{name : 'iceCream' , price : 0.99 , inventory : 20}];

let userAnswer = prompt('here is your shopping cart\n' + customerShoppingCart[0].name + ' : ' + customerShoppingCart[0].price + '\n' + customerShoppingCart[1].name + ' : ' + customerShoppingCart[1].price + '\n' + customerShoppingCart[2].name + ' : ' + customerShoppingCart[2].price + '\n' + 'do you need to remove or add any thing to your shopping cart? (add keyword to add another product and remove keyword to remove a product !)')
let userProductAsked = prompt('enter the name of product !');
let isAvailable = productsArr.some(product => product.name == userProductAsked);
let productIndex = productsArr.findIndex(product => product.name)
    
if (isAvailable == true && productsArr[productIndex].inventory > 0) {
    
   if (userAnswer.toLowerCase() == 'add') {
        customerShoppingCart.push(productsArr[productIndex]);
        alert('the desired product is added to your shopping cart')
    } else if (userAnswer.toLowerCase() == 'remove') {
        let productIndexCart = customerShoppingCart.findIndex(product => userProductAsked == product.name);
        customerShoppingCart.slice(productIndexCart , 1)
        alert('the desired product is removed from your shopping cart')
    }

} else {
    alert('The desired product is not in stock');
}
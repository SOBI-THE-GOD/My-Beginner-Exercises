let productsArr = [{name : 'milk' , price : 1.3 , inventory : 3} ,
{name : 'hot sauce' , price : 2 , inventory : 7} ,
{name : 'cheese' , price : 4.99 , inventory : 8} , 
{name : 'beer' , price : 6.44 , inventory : 0} ,
{name : 'iceCream' , price : 0.99 , inventory : 20} ,
{name : 'snacks' , price : 2.57 , inventory : 7}];

let customerShoppingCart = [{name : 'hot sauce' , price : 2 , inventory : 7} , 
{name : 'snacks' , price : 2.57 , inventory : 7}];

let userAnswer = prompt('Here is your cart : \n' + customerShoppingCart[0].name + ' : ' + customerShoppingCart[0].price + '\n' + customerShoppingCart[1].name + ' : ' + customerShoppingCart[1].price + '\n' + 'sum Prices : ' + (customerShoppingCart[0].price + customerShoppingCart[1].price) + '\n\n Do you need anything else?' );

if (userAnswer.toLowerCase() == 'yes') {
    let productIndex = 0;
    let userProductAsked = prompt('What do you need ?');
    for (let index = 0; productsArr[index].name != userProductAsked ; index++) {
        
        productIndex++
        
    };
    let isAvailable = productsArr.some(product => {
        return product.name == userProductAsked});
    if (isAvailable == true && productsArr[productIndex].inventory > 0) {
        
        customerShoppingCart.push(productsArr[productIndex]);
        productsArr[productIndex].inventory -= 1 ;

    } else {
        alert('The desired product is not in stock');
    }
} else {
    alert('Thank you for your purchase')
}

alert('Herese your cart : \n' + customerShoppingCart[0].name + ' : ' + customerShoppingCart[0].price + '\n' + customerShoppingCart[1].name + ' : ' + customerShoppingCart[1].price + '\n' + customerShoppingCart[2].name + ' : ' + customerShoppingCart[2].price + '\n' + 'sum Prices : ' + (customerShoppingCart[0].price + customerShoppingCart[1].price + customerShoppingCart[2].price));



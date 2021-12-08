/*
	Task - 5.
	We have the product() function. This product() function finds the product of its arguments and also uses this object for the initial value of the product.
	Please, create a new function getProduct()  that, no matter how it is called, will be always bound to a particular this value. getProduct() should be created from 
	the original product() function and work with the same logic, but should pass two additional arguments – 2 and 3 – to the original function, every time getProduct() is called.
	Object this for getProduct() function you should also define by yourself. Look at snapshot for clues what it should be.
*/

const product = function () {
	return [].reduce.call(arguments, function (res, elem) {
		return res * elem;
	}, this.product);
};

const contextObj = {
	product: 10,
};

const getProduct = product.bind(contextObj, 2, 3);

console.log(getProduct(4, 5)); //1200
console.log(getProduct(6, 7)); //2520
console.log(getProduct(0, 7)); //0
console.log(getProduct(6, 0)); //0
console.log(getProduct(-5, 5)); //-1500

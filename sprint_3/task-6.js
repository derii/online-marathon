/*
	Task - 6.
	Please, fill in missed lines of code.

	Product constructor should provide a generation of unique product id within the application no matter how many products are created.
	Distributor can store information about products in its products property and has an ability to add and remove a product.
	addProduct adds a new property to products with name of product id and value - product name.
	removeProduct removes a property with specified id from products
	Please, use the data type that was introduced in the current sprint.
*/

class Distributor {
	constructor() {
		this.products = {};
	}

	addProduct(id, name) {
		//your code
		//add a property to products with name equal to product id and value equal to product name
		this.products[id] = name;
	}

	removeProduct(id) {
		//your code
		//remove a property from products with name equal to specified id
		delete this.products[id];
	}
}

const localDistributor = new Distributor();

class MyProduct {
	constructor(name) {
		//your code
		//generate unique product id; define id and name fields
		this.name = name;
		this.id = Symbol(name);
	}

	distribute(distributor) {
		distributor.addProduct(this.id, this.name);
	}
}


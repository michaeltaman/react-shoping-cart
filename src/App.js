//feature 1
import React from 'react';
import data from './data.json';
import { Products } from './components/Products';
import Cart from './components/Cart';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: data.products,
      cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") ,
      size: '',
      sort: '',
    };
  }

  sortProducts = (event) => {
    //impl
    const sort = event.target.value;
    console.log(sort,  this.state.products);
    this.setState((state) => ({
      sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === 'lowest'
            ? a.price > b.price
              ? 1
              : -1
            : sort === 'heighest'
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1,
        ),
    }));
  };

  createOrder = (order) => {
    alert("Need to save order for " + order.name)
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice(); 
    this.setState({
      cartItems: cartItems.filter((x)=>  x._id !== product._id),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x)=>  x._id !== product._id)));
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item=>{
      console.log(item)
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    })
    if(!alreadyInCart){     
      cartItems.push({...product, count: 1});
      console.log(cartItems)
    }
    this.setState({cartItems})
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

 

  filterProducts = (event) => {
    //impl
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0,
        ),
      });
    }
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Card</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}></Filter>
              <Products products={this.state.products} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart 
                cartItems={this.state.cartItems}  
                removeFromCart={this.removeFromCart} 
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>All rights is reserved.</footer>
      </div>
    );
  }
}

export default App;

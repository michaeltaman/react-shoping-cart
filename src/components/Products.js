import React, { Component } from 'react'
import { connect } from 'react-redux'
import formatCurrency from '../util'

export class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map((product =>
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button primary">Add to Cart</button>
                                </div>
                            </div>
                        </li>)
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

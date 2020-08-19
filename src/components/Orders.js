import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions/orderActions';
import {formatCurrency, formatDate} from '../util';

class Orders extends Component {

  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const { orders } = this.props;
    return !orders ? <div>Orders</div>:
    <div className="orders">
        <h2>Orders</h2>
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        DATE
                    </th>
                    <th>
                        TOTAL
                    </th>
                    <th>
                        NAME
                    </th>
                    <th>
                        EMAIL
                    </th>
                    <th>
                        ADDRESS
                    </th>
                    <th>
                        ITEMS
                    </th>
                </tr>
            </thead>
            <tbody>    
                {orders.map( (order, index) => (
                    <tr key={index}>
                        <th>{order._id}</th>
                        <th>{formatDate(order.createdAt)}</th>
                        <th>{formatCurrency(order.total)}</th>
                        <th>{order.name}</th>
                        <th>{order.email}</th>
                        <th>{order.address}</th>
                        <th>{order.cartItems.map((item, inx) => (
                            <div key={inx} >{item.count} {" x "} {item.title}</div>
                        ))}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
  }
}

export default connect(
  (state) => ({
    orders: state.order.orders,
  }),
  { fetchOrders },
)(Orders);

import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const CartHeader  = ({item, total, symbol, removeFromCart}) => (
            <li >
                <div className="media">
                    <Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}><img alt="" className="mr-3" src={`${item.pictures[0]}`} /></Link>
                    <div className="media-body">
                        <Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}><h4>{item.name}</h4></Link>
                        <h4><span>{item.qty} x {symbol} {(item.price*item.discount/100)}</span></h4>
                    </div>
                </div>
                {/*<span>{cart}</span>*/}
                <div className="close-circle">
                    <a href={null} onClick={ removeFromCart}><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </li>
        )



export default CartHeader;

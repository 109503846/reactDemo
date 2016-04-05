import React from 'react';
import UserInfo from './UserInfo.jsx';
import Order from './Order.jsx';
export default class Base  extends  React.Component{
    render(){

        return (
            <div>
                <UserInfo user={this.props.order.profile} />
                <Order order={this.props.order.orders}/>
            </div>
        )
    }
};

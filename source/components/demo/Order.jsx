/**
 * Created by wjn on 16/3/29.
 */
import React from 'react';
import OrderHead from './OrderHead.jsx';
import Product from './Product.jsx';
export default class Order extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            ref:true,
        };
        this.map = new Map();
    }
    onPrice(orderNum,money){
        this.map.set(orderNum,money);
        this.setState({
            ref:!this.state.ref,
        });
    }
    render(){
        let self=this;
        let arr=[];
        let orders=this.props.order;
        orders.forEach(function(o){
            //if(this.arr.)
            let money=self.map.get(o.header.orderNum)||0;
            arr.push(<OrderHead key={o.header.orderNum+"h"} head={o} price={money} />);
            arr.push(<Product key={o.header.orderNum+"p"} orderNum={o.header.orderNum} onPrice={(id,money)=>self.onPrice(id,money)} products={o.lines} />);

        });
        return (
            <div>
            {arr}
            </div>
    );
    }
}
/**
 * Created by wjn on 16/3/29.
 */
import React from 'react';
export default class OrderHead extends React.Component{
    render(){
        return (
            <div>
            <span>{this.props.head.header.orderNum}</span>
        <span style={{marginLeft:'50'}}>{this.props.price}</span>
        </div>
    );
    }
}
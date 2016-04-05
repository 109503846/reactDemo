/**
 * Created by wjn on 16/3/29.
 */
import React from 'react';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.price = 0;
    }

    componentDidMount() {
        this.props.onPrice(this.props.orderNum, this.price);
    }

    render() {
        let arr = [];
        let products = this.props.products;
        let self = this;
        products.forEach(function (o) {
            self.price += o.unitPrice * o.count;
            arr.push(<tr key={o.lineNum}>
                <td>{o.productName}</td>
                <td>{o.unitPrice}</td>
                <td>{o.count}</td>
                <td >{o.unitPrice * o.count}</td>
            </tr>);
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>商品名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>总价</th>
                </tr>
                </thead>
                <tbody>
                {arr}
                </tbody>
            </table>
        );
    }
}
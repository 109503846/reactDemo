import React from 'react';
import ReactDOM from 'react-dom';
import Base from './Base.jsx';

var order={
    "profile":{
        "id":"UID-001",
        "name":"韦冀南",
        "account":1065.37,
        "lastTime":1459152652031
    },
    "orders":[{
        "header":{
            "orderNum":"OID-001",
            "createTime":1459152875030,
            "amount":300.00
        }, "lines":[{
            "lineNum":1,
            "productName":"微波炉",
            "unitPrice":300.00,
            "count":1,
            "amount":300.00
        }]
    },{
        "header":{
            "orderNum":"OID-002",
            "createTime":1459153248254,
            "amount":4340.00
        }, "lines":[{
            "lineNum":1,
            "productName":"小米电视",
            "unitPrice":4100.00,
            "count":1,
            "amount":4100.00
        },{
            "lineNum":2,
            "productName":"插座",
            "unitPrice":120.00,
            "count":2,
            "amount":240.00
        }]
    }]
}

ReactDOM.render(
    <Base order={order} />,
    document.getElementById('example')
);


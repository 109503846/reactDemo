import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

var userList=[{id:'1',name:'Join',sex:'F',birthday:'1987-03-21'},{id:'2',name:'May',sex:'M',birthday:"1990-05-02"}];


var topbarInstance = (
    <Form users={userList} />
);


ReactDOM.render(
    topbarInstance,
    document.getElementById('example')
);


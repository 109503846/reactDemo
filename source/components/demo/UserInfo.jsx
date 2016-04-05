/**
 * Created by wjn on 16/3/29.
 */
import React from 'react';
export default class UserInfo extends React.Component{
    getLocalTime(nS) {
        var newDate = new Date();
        newDate.setTime(nS);
        return newDate.toLocaleDateString();
    }
    render(){
        let date=this.getLocalTime(this.props.user.lastTime);
        return (
            <div>
                <span>ID:{this.props.user.id}</span>
                <br/>
                <span>姓名:{this.props.user.name}</span>
                <br/>
                <span>金额:{this.props.user.account}</span>
                <br/>
                <span>日期:{date}</span>
            </div>
        );
    }
}
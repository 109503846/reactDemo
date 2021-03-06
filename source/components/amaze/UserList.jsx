import React from 'react';
import {Table} from 'amazeui-react';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    onSelect(user){
        this.props.onSelect(user);
    }

    render() {
        let self=this;
        let rows=[];
        let className="";
        this.props.users.forEach((user,index)=>{
            if(user.id==this.props.selectIndex) {
                className="am-active";
            }else{
                className="";
            }
            rows.push(
                /*onClick={this.onSelect.bind(self, user}*/
                <tr key={user.id+index}  className={className}  onClick={()=>self.onSelect(user)}>
                    <td>{user.name}</td>
                    <td>{user.sex=="F"?"男":"女"}</td>
                    <td>{user.birthday}</td>
                </tr>
            );
        });
        return (
            <Table hover>
                <thead>
                <tr>
                    <th>名字</th>
                    <th>性别</th>
                    <th>生日</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </Table>
        );

    }
}



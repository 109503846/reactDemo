import React from 'react';
import {Grid,Col,Container} from 'amazeui-react';
import UserInfo from './UserInfo';
import UserImg from './UserImg';
import UserList from './UserList';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users:props.users
        };
        this.maxId = props.users.length;
    }

    onSave(user) {
        this.state.users.map(function(obj){
            if(obj.id==user.id){
                user.uri=obj.uri;
                return user;
            }else{
                return obj;
            }
        });
        if (user.id) {
            this.setState({
                user: user,
                users:Array.from(this.state.users,obj=> obj.id==user.id?user:obj),
            });
        } else {
            this.maxId++;
            user.id = this.maxId;
            this.state.users.push(user);
            this.setState({
                user: user,
            });
        }
    }

    onDelete() {
        let user=this.state.user;
        let idx=null;
        this.state.users.forEach(function (obj,index) {
            if(obj.id==user.id){
                idx=index;
            }
        });
        if(idx!=null){
        this.state.users.splice(idx,1);
        this.setState({
            user:null
        });
        }
    }

    onSelect(user) {
        this.setState({
                user: user,
            }
        );
    }

    onUpload(uri){
        if (!this.state.user) {
            alert("请选择要传头像的人物信息!!");
            return false;
        }
      this.state.user.uri=uri;
      this.setState({
          user:this.state.user,
      });
    }

    render() {
        return (
            <div style={{marginTop:'50px'}} >
                <Grid fixed className="doc-g">
                    <Col sm={4}><UserImg uri={this.state.user&&this.state.user.uri} upload={(uri)=>this.onUpload(uri)}/></Col>
                    <Col sm={8}><UserInfo user={this.state.user}  saveUser={(user)=>this.onSave(user)} deleteUser={()=>this.onDelete()}/></Col>
                </Grid>
                <Container>
                    <UserList users={this.state.users} onSelect={(user)=>this.onSelect(user)}/>
                </Container>
            </div>
        );

    }
}



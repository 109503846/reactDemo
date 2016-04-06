import React from 'react';
import ReactDOM from 'react-dom';
import {Form,Input,ButtonToolbar,Button,FormGroup,DateTimeInput,Grid,Col,Icon} from 'amazeui-react';
import DateUtil from '../common/DateUtil';
export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.user && props.user.name,
        };
    }

    handleSelect(date) {
        this.state.birthday = date;
    }

    create() {
        this.state = null;
        this.setState({
            ref: true,
            sex:"F"
        });
    }

    save() {
        let id= this.state.id;
        let name = this.state.name;
        let birthday = this.state.birthday||this.refs.dat.state.value;
        let sex = this.state.sex||this.refs.sex.getValue();
        let user = {id, name, birthday, sex};
        this.props.saveUser(user);
    }

    delete() {
        this.props.deleteUser();
    }

    change(key) {
        this.setState({
            [key]: this.refs[key].getValue()
        });
    }

    /*
     * 在接收到新的 props 或者 state，将要渲染之前调用。该方法在初始化渲染的时候不会调用
     */
    shouldComponentUpdate(nextProps, nextState) {
        if (!nextState.ref) {
            this.state.id = nextProps.user && nextProps.user.id;
            this.state.name = nextProps.user && nextProps.user.name;
            this.state.birthday = nextProps.user && nextProps.user.birthday;
            this.state.sex = nextProps.user ? nextProps.user.sex:"F";
        }
        nextState.ref = false;
        return true;
    }

    /*
     在组件的更新已经同步到 DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用。
     使用该方法可以在组件更新之后操作 DOM 元素
     */
    componentDidUpdate() {
        if (this.state.birthday) {
            this.refs.dat.handleSelect(this.state.birthday);
        }else{
            this.refs.dat.handleSelect(new DateUtil().getNowFormatDate());
        }
    }

    render() {
        let btnAfter=<Button  onClick={()=>{this.refs.dat.handleClick()} } ><Icon icon="calendar" /></Button>;
        return (
            <Form horizontal className="am-form" target="_blank">
                <Grid collapse fixed className="doc-g">
                    <Col sm={2}><label>用户名 </label></Col>
                    <Col sm={10}>
                        <Input type="text" value={this.state.name} placeholder="输入用户名" ref="name"
                               onChange={()=>this.change('name')} hasFeedback/>
                    </Col>
                </Grid>
                <Grid collapse fixed className="doc-g">
                    <Col sm={2}><label>性别 </label></Col>
                    <Col sm={10}> <Input type="select" value={this.state.sex} ref="sex"
                                         onChange={()=>this.change('sex')}>
                        <option value="F">男</option>
                        <option value="M">女</option>
                    </Input>
                    </Col>
                </Grid>
                <Grid collapse fixed className="doc-g">
                    <Col sm={2}><label>日期时间 </label></Col>
                    <Col sm={10}>
                        <DateTimeInput
                            className="am-u-sm-10"
                            onSelect={(date)=>this.handleSelect(date)}
                            format="YYYY-MM-DD"
                            ref="dat"
                            readOnly
                            btnAfter={btnAfter}
                        />
                    </Col>
                </Grid>
                <Grid collapse fixed className="doc-g">
                    <Col sm={10} smOffset={2}>
                        <ButtonToolbar >
                            <Button amStyle="success" onClick={()=>this.create()}>新建</Button>
                            <Button amStyle="warning" onClick={()=>this.save()}>保存</Button>
                            <Button amStyle="danger" onClick={()=>this.delete()}>删除</Button>
                        </ButtonToolbar>
                    </Col>
                </Grid>
            </Form>
        );

    }
}



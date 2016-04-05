import React from 'react';
import ReactDOM from 'react-dom';
import {form,Input,Grid,Col,Panel,Image,Button} from 'amazeui-react';

export default class UserImg extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            uri:"",
        };
    }

    openUpload(){
        this.refs.file.getFieldDOMNode().click();
    }

    onSelect(){
        let filed=this.refs.file.getFieldDOMNode();
        let imgFile = filed.files[0];
        let oReader = new FileReader();
        let self=this;
        oReader.onload = function(e){
            self.props.upload(e.target.result);
        };
        oReader.readAsDataURL(imgFile);
    }


    render() {
        return (
            <form horizontal className="am-form" target="_blank">
                <Grid collapse fixed className="doc-g" style={{height:'150px'}}>
                    <Col>
                           <Image src={this.props.uri||""} ref="img"  height="150" width="300"
                                  />
                    </Col>
                </Grid>
                <Grid collapse fixed className="doc-g">
                    <Col sm={3} smCentered>
                        <Input type="file" ref="file" onChange={()=>this.onSelect()}  id="file" style={{display:'none'}} />
                        <Button  amStyle="secondary"  onClick={()=>this.openUpload()}>上传照片</Button>
                    </Col>
                </Grid>
            </form>

        );

    }
}



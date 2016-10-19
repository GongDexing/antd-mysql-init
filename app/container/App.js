/*jshint esversion:6*/
import 'antd/dist/antd.less';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
class App extends Component{
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps){

  }
  render(){
    return (
      <p>Hello world</p>
    );
  }
}

function mapStateToProps(state){
  return {

  };
}
export default connect(mapStateToProps)(App);

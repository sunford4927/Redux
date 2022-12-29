import React, { Component } from "react";
import{connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1><a href="#welcome" onClick={function(){
            this.props.onClick();
        }.bind(this)}>WEB</a></h1>
        World WIde WEB
      </header>
    );
  }
}

// 리덕스에 의존률이 높은코드connect
export default connect(
    null,
    function(dispatch){
        return {
            onClick:function(){
                dispatch({type:'WELCOME'})
            }
        }
    }
)(Header)
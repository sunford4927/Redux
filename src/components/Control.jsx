import React, { Component } from "react";

export default class Control extends Component {
    render() {
        return(
            <ul>
                <il><a href="create" onClick={function(e){
                    this.props.onClick('CREATE');
                    e.preventDefault();
                }.bind(this)}>create</a></il>
                <il><a href="update" onClick={function(e){
                    this.props.onClick('UPDATE');
                    
                    e.preventDefault();// 화면 렌터링 방지
                }.bind(this)}>update</a></il>
                <il><input type='button' value='delete' onClick={function(e){
                    this.props.onClick('DELETE_PROCESS');
                    e.preventDefault();
                }.bind(this)}></input></il>
            </ul>
        )
    }
}
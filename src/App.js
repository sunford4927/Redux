import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ReadContainer from "./containers/Read.jsx";
import NavContainer from "./containers/Nave";
import ControlContainer from "./containers/Control.jsx";
import CreateContainer from "./containers/Create.jsx";
import { connect } from "react-redux";
import { Component } from "react";
import UpdateContainer from "./containers/Update";

class App extends Component {
  render() {
    var article =null;
    if (this.props.mode === "READ") {
      article = <ReadContainer></ReadContainer>;
    } else if (this.props.mode === "CREATE") {
      article = <CreateContainer></CreateContainer>;
    } else if (this.props.mode === "WELCOME"){
      article =  <ReadContainer></ReadContainer>
    } else if (this.props.mode === "UPDATE"){
      article = <UpdateContainer></UpdateContainer>
    }

    return (
      <div className="App">
        <Header></Header>
        {/*  nav = 네비게이션 태그 */}
        <NavContainer></NavContainer>
        <ControlContainer></ControlContainer>
        {article}
      </div>
    );
  }
}

export default connect(function (state) {
  return {
    mode: state.mode,
  };
})(App);

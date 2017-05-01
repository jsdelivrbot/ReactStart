import React, { Component } from 'react';
import Header from "../components/header";
import RightSideMenu from "../components/rightsidemenu";


export default class App extends Component {
  render() {
    return (
        <div>
            <RightSideMenu />
            <Header message="React-Redux Rocks!!!"/>
        </div>
    );
  }
}

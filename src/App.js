import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import firebase_config from './keys/key';
import Firstpage from './components/Firstpage';
import RowDice from './components/rowDice';
import PlayGround from './components/playground';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.firebase = firebase.initializeApp(firebase_config);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props=><Firstpage firebase={this.firebase}/>}/>
          <Route exact path="/yay" render={props=><RowDice/>}/>
          <Route exact path="/playground" render={props=><PlayGround firebase={this.firebase}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
};

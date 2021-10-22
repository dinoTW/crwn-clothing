import "./App.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'
import React from "react";

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        await userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state)
          })
        })
      }

      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;

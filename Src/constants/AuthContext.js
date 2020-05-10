
import React, { useState, useEffect } from 'react';
const AuthContext = React.createContext();


class AuthProvider extends React.Component {

    constructor(props){
        super(props)

        this.state={
            isSignin: false
        }
    }
    

    updateAuth = () => {
        this.setState({ isSignin: !this.state.isSignin },() => {
        })
    }
   render(){
       const { isSignin } = this.state;

    return (
        <AuthContext.Provider
        value={{
            isSignin,
            updateAuth: this.updateAuth,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  };
}
// export default HomeIconWithBadge;
export { AuthProvider, AuthContext };
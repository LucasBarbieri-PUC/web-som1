import React, { Component } from "react";
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">ENTRAR</button>
        </form>
      </div>
    );
  }
}

export default App;

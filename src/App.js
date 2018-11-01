import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            Çok yakında
          </p>
          <p>
            #Web tasarım #Yazılım  #Bitcoin Danışmanlığı #Sosyal medya yönetimi #Seo #Adwords
          </p>
          <a
            className="App-link"
            href="https://www.facebook.com/jestbilisim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="App-link"
            href="https://www.instagram.com/jestbilisim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="App-link"
            href="https://twitter.com/jestbilisim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </header>
      </div>
    );
  }
}

export default App;

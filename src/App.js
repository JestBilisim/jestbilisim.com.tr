import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => (
  <div className="link-wrapper">
    <Helmet
      title="Jest Bilişim"
      meta={
        [
          { name: 'description', content: 'Jest bilişim yazılım web tasarım hizmetleri' },
        ]
      }
    />
    <ul>
      <li>
        <a
          href="https://www.facebook.com/jestbilisim"
          target="_blank"
          rel="noopener noreferrer"
        >Facebook</a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/jestbilisim/"
          target="_blank"
          rel="noopener noreferrer"
        >Instagram</a>
      </li>
      <li>
        <a
          href="https://twitter.com/jestbilisim"
          target="_blank"
          rel="noopener noreferrer"
        >Twitter</a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/jestbilisim"
          target="_blank"
          rel="noopener noreferrer"
        >Linkedin</a>
      </li>
      <li>
        <Link
          to="/iletisim"
        >İletişim</Link>
      </li>
    </ul>
  </div>
)

const Contact = () => (
  <div className="contact-wrapper">
    <Helmet
      title="İletişim - Jest Bilişim"
      meta={
        [
          { name: 'description', content: 'Jest bilişim adres telefon ve diğer iletişim bilgilerimiz' },
        ]
      }
    />
    <p><strong>Adres:</strong>Akyazı Mah. 879. Sokak No :3-5 Huzur İş Merkezi Kat:3, 52200 Altınordu/Ordu Türkiye</p>
    <p><strong>Telefon:</strong> (452) 222 21 88</p>
  </div>
)

const Header = () => {
  return(
    <div>
      <header className="App-header">
        <h1><Link to="/">Jest Bilişim</Link></h1>
        <h2>Çok Yakında</h2>
        <p>#Web tasarım #Yazılım #Sosyal Medya Yönetimi</p>
        <p>Akyazı Mah. 879. Sokak No :3-5 Huzur İş Merkezi Kat:3, 52200 Altınordu/Ordu</p>
      </header>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/iletisim" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const default_metas = [
  { name: 'description', content: 'Jest bilişim yazılım web tasarım hizmetleri' },
  { property: 'og:title', content: 'Jest bilişim' },
  { property: 'og:description', content: 'Jest bilişim' },
  { property: 'og:image', content: 'public/logo-bg.jpg' }
];

const Home = () => (
  <div className="link-wrapper">
    <Helmet
      title="Jest Bilişim"
      meta={default_metas}
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
          to="/contact"
        >İletişim</Link>
      </li>
    </ul>
  </div>
)

const Contact = () => (
  <div className="contact-wrapper">
    <Helmet
      title="İletişim - Jest Bilişim"
      meta={default_metas}
    />
    <p><strong>Adres:</strong> 302. Sk. Ordu / Türkiye</p>
    <p><strong>Telefon:</strong> (452) 222 21 88</p>
  </div>
)

const Header = () => {
  return(
    <div>
      <header className="App-header">
        <h1><Link to="/">Jest Bilişim</Link></h1>
        <h2>Çok Yakında</h2>
        <p>#Web tasarım #Yazılım  #Bitcoin Danışmanlığı #Sosyal Medya Yönetimi</p>
        <p>#Seo #Adwords #Mobil Uygulama #Editörlük</p>
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
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;

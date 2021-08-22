
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Overview from './pages/Overview'
import Projects from './pages/Projects'

function App() {
  return (
    <div className = 'wrapper' >
      <Header />
      <Switch>
      <Route path= '/' exact>
        <Overview />
      </Route>
      <Route path= '/about'>
        <About />
      </Route>
      <Route path= '/project'>
        <Projects />
      </Route>
      <Route path= '/contact'>
        <Contact />
      </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

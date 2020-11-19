import AboutMe from './pages/AboutMe';
//Global Style
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/work" exact>
          <MyWork />
        </Route>
        <Route path="/work/:id">
          <ProjectDetail />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

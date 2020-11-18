import AboutMe from './pages/AboutMe';
//Global Style
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;

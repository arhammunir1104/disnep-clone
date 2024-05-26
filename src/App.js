import logo from './logo.svg';
import './App.css';
import { Route , Routes} from 'react-router-dom';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { Header } from './Components/Header';
import { Details } from './Components/Details';
function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' Component={Home} />
        <Route path='/details/:id' Component={Details} />
      </Routes>
    </div>
    </>
  );
}

export default App;

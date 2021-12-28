import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router} from "react-router-dom"; 
import Routes from "./routes";
function App() {
  return (
    <div className="App">     
    <Router> 
        <Routes />  
    </Router>
   </div>
  );
}

export default App;

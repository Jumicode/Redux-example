//import logo from './logo.svg';
//import './App.css';

import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import UserList from "./Components/UserList";
import Store from "./Store";


function App() {
  return (
    <div className="App">
  
  <Provider store={Store}>
  <Nav></Nav>
 <UserList></UserList>
  </Provider>
 
    </div>
  );
}

export default App;

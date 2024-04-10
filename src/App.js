import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import SignupPage from "./components/SignupPage";
import Profile from "./components/Profile";
import Role from "./components/Role";
import Confirmation from "./components/Confirmation";
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={SignupPage}/>
        <Route path='/profile' Component={Profile}/>
        <Route path="/role" Component={Role}/>
        <Route path="/email/confirmation" Component={Confirmation}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
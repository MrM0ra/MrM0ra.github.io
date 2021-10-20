import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import {Login} from '../src/components/pages/Login';
import {Chat} from '../src/components/pages/Chat';
import {Registry} from '../src/components/pages/Registry';
import {AuthProvider} from '../src/context/UserContext';
//import {styles} from '../src/styles/styles';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter /*style={styles.body}*/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/chat"  component={Chat}/>
        <Route exact path="/register"  component={Registry}/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

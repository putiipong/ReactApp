import {
  BrowserRouter ,
  Switch,
  Route
 } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddPostPage from './pages/AddPostPage'
import './App.css';

function App() {
  return (
    <div>
      < BrowserRouter>
        <Switch>
          <Route path="/add" component={AddPostPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </ BrowserRouter>
    </div>
  );
}

export default App;

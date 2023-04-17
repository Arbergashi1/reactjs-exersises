import logo from './logo.svg';
import './App.css';
import MainFolderPage from './components/folder/MainFolderPage';
import { BrowserRouter, Link, Routes, Route, Switch } from "react-router-dom";
import ConfigurationView from './components/configurationsview/ConfigurationView';
import KeyName from './components/newRoute/KeyName/KeyName';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path ="/newRoute" component={KeyName} />
      <Route exact path ="/" component={MainFolderPage} />

      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MainFolderPage from './components/folder/MainFolderPage';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ConfigurationView from './components/configurationsview/ConfigurationView';

function App() {
  return (
    <div className="App">
      <MainFolderPage/>
      
    </div>
  );
}

export default App;

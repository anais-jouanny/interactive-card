// == Import
import './App.scss';
import Header from '../Header/Header';
import Form from '../Form/Form';
import dataInfos from '../../data/infos';
import { useState } from 'react';


// == Composant
function App() {
  const [infos, setInfos] = useState(dataInfos);
  
  return (
    <div className="app">
      <Header infos={infos} />
      <Form />
    </div>
  );
}

// == Export
export default App;

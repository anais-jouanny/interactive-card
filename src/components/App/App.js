// == Import
import './App.scss';
import Header from '../Header/Header';
import Form from '../Form/Form';
import dataInfos from '../../data/infos';
import { useState } from 'react';

// == Composant
function App() {
  const [infos, setInfos] = useState(dataInfos);
  const [newName, setNewName] = useState('');

  const changeInfos = (newValue, keyForm) => {
    
  };

  return (
    <div className="app">
      <Header infos={infos} newName={newName} />
      <Form newName={newName} setNewName={setNewName} changeInfos={changeInfos} />
    </div>
  );
}

// == Export
export default App;

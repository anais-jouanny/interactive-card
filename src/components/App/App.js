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

  const changeInfos = (newValue, key) => {
    const updatedInfos = infos.map((info) => {
      if (info.key === key) {
        return {
          ...info,
          value: newValue,
        };
      }
      return info;
    });
    setInfos(updatedInfos);
  };

  return (
    <div className="app">
      <Header infos={infos} newName={newName} />
      <Form newName={newName} changeInfos={changeInfos} />
    </div>
  );
}

// == Export
export default App;

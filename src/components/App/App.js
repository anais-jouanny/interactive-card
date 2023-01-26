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
  const [newNumber, setNewNumber] = useState('');
  const [newMonth, setNewMonth] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newCvc, setNewCvc] = useState('');

  const changeInfos = (newValue, keyForm) => {
    const infosTab = Object.entries(infos)
      .map((entry) => {
        if (entry[0] === keyForm) {
          return [entry[0], newValue];
        }
        return entry;
      });
    const updatedInfos = Object.fromEntries(infosTab);
    setInfos(updatedInfos);
  };

  return (
    <div className="app">
      <Header infos={infos} />
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        newMonth={newMonth}
        setNewMonth={setNewMonth}
        newYear={newYear}
        setNewYear={setNewYear}
        newCvc={newCvc}
        setNewCvc={setNewCvc}
        changeInfos={changeInfos}
      />
    </div>
  );
}

// == Export
export default App;

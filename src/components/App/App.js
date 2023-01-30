// == Import
import './App.scss';
import Header from '../Header/Header';
import Form from '../Form/Form';
import { useState } from 'react';

// == Composant
function App() {
  // const [infos, setInfos] = useState(dataInfos);
  const [name, setName] = useState('jane appleseed');
  const [number, setNumber] = useState('0000000000000000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('000');

  // const changeInfos = (newValue, keyForm) => {
  //   const infosTab = Object.entries(infos)
  //     .map((entry) => {
  //       if (entry[0] === keyForm) {
  //         return [entry[0], newValue];
  //       }
  //       return entry;
  //     });
  //   const updatedInfos = Object.fromEntries(infosTab);
  //   setInfos(updatedInfos);
  // };

  return (
    <div className="app">
      <Header
        name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />
      <Form
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        cvc={cvc}
        setCvc={setCvc}
      />
    </div>
  );
}

// == Export
export default App;

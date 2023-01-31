// == Import
import './App.scss';
import Header from '../Header/Header';
import Form from '../Form/Form';
import { useState } from 'react';

// == Composant
function App() {
  const [name, setName] = useState('jane appleseed');
  const [number, setNumber] = useState('0000000000000000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('000');
  const [final, setFinal] = useState(false);

  return (
    <div className="app">
      <Header
        name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
        final={final}
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
        final={final}
        setFinal={setFinal}
      />
    </div>
  );
}

// == Export
export default App;

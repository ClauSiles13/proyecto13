import logo from './logo.svg';
import './App.css';
import C01component from './component/C01component';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C04variable from './component/C04variable';

function App() {
  return (
    <div>
      <h1>Componente 1</h1>
      <C01component  />
      <h1>Componente 2</h1>
      <C02contador />
      <h1>Componente 3</h1>
      <C03dobleestado/>
      <h1>Componente 4</h1>
      <C04variable xVariable="Hoy dia es viernes..."/>
    </div>
  );
}

export default App;

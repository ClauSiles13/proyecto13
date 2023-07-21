import logo from './logo.svg';
import './App.css';
import C01component from './component/C01component';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C04variable from './component/C04variable';
import C05operadorTernario from './component/C05operadorTernario';
import C06matriz from './component/C06matriz';
import C07matrizOperaciones from './component/C07matrizOperaciones';

function App() {
  return (
    <div>
      <h1>Componente 1</h1>
      <C01component  />
      <h1>Componente 2</h1>
      <C02contador />
      <h1>Componente 3</h1>
      <C03dobleestado />
      <h1>Componente 4</h1>
      <C04variable xVariable="Hoy dia es viernes..."/>
      <h1>Componente 5</h1>
      <C05operadorTernario />
      <h1>Componente 6</h1>
      <C06matriz />
      <h1>Componente 7</h1>
      <C07matrizOperaciones />
    </div>
  );
}

export default App;

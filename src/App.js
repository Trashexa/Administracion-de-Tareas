import './App.css';
import ListaDeTareas from "./componentes/Lista-de-tareas";


function App() {
  return (
    <div className="App">
      <div className='tarea-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

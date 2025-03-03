import './App.css';
import CounterComponent from './component/CounterComponent';
import InputComponent from './component/InputComponent';
import TodoListComponent from './component/TodoListComponent';
import UseFormComponent from './component/UseFormComponent';


function App() {
  return (
    <>
      <h1>useState Examples</h1>
      <CounterComponent />
      <InputComponent />
      <TodoListComponent />
      <UseFormComponent />
    </>
  );
}

export default App;

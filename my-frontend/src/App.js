import CreateTodo from "./components/CreateTodo";
import ListTodos from "./components/ListTodos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CreateTodo />
      <ListTodos />
    </div>
  );
}

export default App;

import "./App.css";
import Counter from "./components/Counter";
import CounterFunction from "./components/CounterFunction";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="main-div">
        <h1 className="App">Class Components</h1>
        
        <h1 className="App">
          <Counter value={0} />
        </h1>
        <h1 className="App">Function Components</h1>
        <h1 className="App">
          <CounterFunction />
        </h1>
      </div>
    </>
  );
}

export default App;

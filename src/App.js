import logo from "./logo.svg";
import "./App.css";

import Developer from "./components/Developer";

function App() {
  const pessoa1 = { name: "Lucas", age: 24, country: "Brasil" };
  const pessoa2 = { name: "João", age: 30, country: "Argentina" };
  const pessoa3 = { name: "Maria", age: 17, country: "Inglaterra" };

  return (
    <div className="App">
      <div className="App-header">
        <Developer
          name={pessoa1.name}
          age={pessoa1.age}
          country={pessoa1.country}
        />

        <Developer
          name={pessoa2.name}
          age={pessoa2.age}
          country={pessoa2.country}
        />

        <Developer
          name={pessoa3.name}
          age={pessoa3.age}
          country={pessoa3.country}
        />
      </div>
    </div>
  );
}

export default App;

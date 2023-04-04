import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a
          href="https://docs.appsignal.com/guides/new-application.html"
          target="_blank"
        >
          <img
            src="https://d201zbfblqcbtj.cloudfront.net/assets/logo/logo-mark-white-2fbbeb3ffb17655c304b85b742a1db5945649c27a85abaf83dd52b8cdbbef4a1.svg"
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>AppSignal</h1>
      <p className="read-the-docs">
        Clique na logo para consultar a documentação
      </p>
    </div>
  );
}

export default App;

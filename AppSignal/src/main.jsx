import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { appsignal } from "./appsignal"
import { ErrorBoundary } from "@appsignal/react"

const FallbackComponent = () => <div>Oh não... Ocorreu um erro!</div>

const AppSignal = () => (
  <ErrorBoundary
    instance={appsignal}
    tags={{ tag: "value" }}
    fallback={(error) => <FallbackComponent />}
  >
    <App />
  </ErrorBoundary>
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppSignal />
  </React.StrictMode>
)

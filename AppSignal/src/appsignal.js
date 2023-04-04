// appsignal.js

// For ES Module via npm/yarn, or with import maps
import Appsignal from "@appsignal/javascript"

export const appsignal = new Appsignal({
  key: "b8f67b99-9ad6-41d5-b2c8-519b70bbc441",
  namespace: "appsignal", // Configure the AppSignal namespace for front-end errors in this app
})

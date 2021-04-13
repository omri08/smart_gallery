import React from "react";
import { Header } from "./components";
import MainPage from "./pages/MainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="mainPage">
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;

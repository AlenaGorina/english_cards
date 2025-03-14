import React from "react";
import Header from "./components/layout/header/Header";
import Footer from ".//components/layout/footer/Footer";
import WordList from "./components/blocks/WordList/WordList";
import "./index.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <WordList />
      <Footer />
    </div>
  );
};

export default App;

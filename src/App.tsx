import { WordsProvider } from "./components/context/WordsContext";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import WordList from "./components/blocks/WordList/WordList";
import "./index.scss";

const App: React.FC = () => {
  return (
    <WordsProvider>
      <div className="App">
        <Header />
        <WordList />
        <Footer />
      </div>
    </WordsProvider>
  );
};

export default App;

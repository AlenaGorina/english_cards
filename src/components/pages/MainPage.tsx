import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
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

function MainPage() {
  return (
    <div className={style.pageWrap}>
      <NavBar></NavBar>
      <main className={style.main}>
        <Header></Header>
        {/* Сюда блоки */}
        <MainBilboard></MainBilboard>
        <AboutMe></AboutMe>
        <CustomerPain></CustomerPain>
        <ResultsBlock></ResultsBlock>
        <Cases1></Cases1>
        <WhyTry></WhyTry>
        <VideoBlock></VideoBlock>
        <Programs></Programs>
        <Feedback></Feedback>
        <ContactBlock></ContactBlock>
        <Footer></Footer>
      </main>
    </div>
  );
}
export default MainPage;

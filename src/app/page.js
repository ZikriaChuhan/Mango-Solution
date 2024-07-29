import "./page.css"
import Header from "./component/header";
import Slider from "./component/slider";
import Card from "./component/card";
import About from "./component/about";
import WordDetail from "./component/worddetail";

export default function Home() {

  return (
    <main>
      <Header />
      <Slider />
      <Card />
      <About />
     <WordDetail />

    </main>
  );
}

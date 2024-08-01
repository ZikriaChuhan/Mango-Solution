import "./page.css"
import Header from "./component/header";
import Slider from "./component/slider";
import Card from "./component/card";
import About from "./component/about";
import WordDetail from "./component/worddetail";
import Services from "./component/services";
import Feedback from "./component/feedback";

export default function Home() {

  return (
    <main>
      <Header />
      <Slider />
      <Card />
      <About />
     <WordDetail />
     <Services />
     <Feedback />
    </main>
  );
}

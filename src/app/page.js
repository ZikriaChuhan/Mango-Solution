import "./page.css"
import Header from "./component/header";
import Slider from "./component/slider";
import Card from "./component/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingShield } from '@fortawesome/free-solid-svg-icons'


export default function Home() {

  return (
    <main>
      <Header />
      <Slider />
      <Card />
      <div>
        
      </div>

    </main>
  );
}

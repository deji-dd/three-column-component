import "./App.css";
import sedan from "./sedan.svg";
import suvs from "./suvs.svg";
import luxury from "./luxury.svg";
import Card from "./Card";

function App() {
  return (
    <div className="main-div row mx-auto">
      <Card
        class={"one col"}
        color={"hsl(31, 77%, 52%)"}
        img={sedan}
        alt={"sedan"}
        h1={"SEDANS"}
        p={
          "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        }
      />
      <Card
        class={"col"}
        color={"hsl(184, 100%, 22%)"}
        img={suvs}
        alt={"suv"}
        h1={"SUVS"}
        p={
          "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        }
      />
      <Card
        class={"three col"}
        color={"hsl(179, 100%, 13%)"}
        img={luxury}
        alt={"luxury"}
        h1={"LUXURY"}
        p={
          "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        }
      />
    </div>
  );
}

export default App;

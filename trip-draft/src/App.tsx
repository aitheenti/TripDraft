import "./App.css";
import Tripcard from "./components/Tripcard/Tripcard.tsx";
import { tripCards } from "./mocks/trip-card.mocks";

function App() {
  return (
    <>
      {tripCards.map((card) => (
        <Tripcard
          tripName={card.tripName}
          destination={card.destination}
          dateRange={card.dateRange}
          key={card.tripName}
        />
      ))}
    </>
  );
}

export default App;

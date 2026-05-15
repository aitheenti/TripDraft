import "./App.css";
import Tripcard from "./components/Tripcard/Tripcard.tsx";
import { tripCards } from "./mocks/trip-card.mocks";

function App() {
  const handleAddTrip = () => {
    console.log("add trip");
  };

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
      <button onClick={handleAddTrip}>Add new Trip</button>
    </>
  );
}

export default App;

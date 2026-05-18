import { useState } from "react";
import "./App.css";
import Tripcard from "./components/Tripcard/Tripcard.tsx";
import { tripCards } from "./mocks/trip-card.mocks";
import TripForm from "./components/TripForm/TripForm.tsx";
import type { TripcardProps } from "./components/Tripcard/trip-card.interface.ts";

function App() {
  const [trips, setTrips] = useState(tripCards);

  const onAddTrip = (tripToBeAdded: TripcardProps): void => {
    setTrips([...trips, tripToBeAdded]);
  };

  return (
    <>
      {trips.map((card) => (
        <Tripcard
          tripName={card.tripName}
          destination={card.destination}
          fromDate={card.fromDate}
          toDate={card.toDate}
          key={card.tripName}
        />
      ))}
      <TripForm onAddTrip={onAddTrip} />
    </>
  );
}

export default App;

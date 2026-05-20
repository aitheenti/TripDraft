import { useState } from "react";
import "./App.css";
import Tripcard from "./components/Tripcard/Tripcard.tsx";
import { tripCards } from "./mocks/trip-card.mocks";
import TripForm from "./components/TripForm/TripForm.tsx";
import type {
  TripCardProps,
  TripData,
} from "./components/Tripcard/trip-card.interface.ts";

function App() {
  const [trips, setTrips] = useState<TripData[]>(tripCards);

  const onAddTrip = (tripToBeAdded: TripCardProps): void => {
    const newTrip: TripData = { ...tripToBeAdded, id: crypto.randomUUID() };
    setTrips([...trips, newTrip]);
  };

  const onDeleteTrip = (tripToBeDeleted: string): void => {
    setTrips((prevState) =>
      prevState.filter((trip) => trip.id !== tripToBeDeleted),
    );
  };

  return (
    <>
      {trips.length > 0 ? (
        trips.map((card) => (
          <Tripcard
            tripName={card.tripName}
            destination={card.destination}
            fromDate={card.fromDate}
            toDate={card.toDate}
            key={card.tripName}
            onDeleteTrip={onDeleteTrip}
            id={card.id}
          />
        ))
      ) : (
        <h2>You've got only one life to travel.</h2>
      )}
      <TripForm onAddTrip={onAddTrip} />
    </>
  );
}

export default App;

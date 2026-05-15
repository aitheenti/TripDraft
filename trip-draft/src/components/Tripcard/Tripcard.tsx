import type { JSX } from "react";
import type { Tripcard as TripcardProps } from "./trip-card.interface";

function Tripcard({ tripName, destination, dateRange }: TripcardProps): JSX.Element {
  return (
    <div className="card-container">
      <div className="tripName">{tripName}</div>
      <div className="destination">{destination}</div>
      <div className="range">{dateRange}</div>
    </div>
  );
}

export default Tripcard;

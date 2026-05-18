import type { JSX } from "react";
import type { TripcardProps } from "./trip-card.interface";

function Tripcard({
  tripName,
  destination,
  fromDate,
  toDate,
}: TripcardProps): JSX.Element {
  return (
    <div className="card-container">
      <div className="tripName">{tripName}</div>
      <div className="destination">{destination}</div>
      <span className="fromDate">{fromDate}</span> -
      <span className="toDate">{toDate}</span>
    </div>
  );
}

export default Tripcard;

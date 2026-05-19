import type { JSX } from "react";
import type { TripcardProps } from "./trip-card.interface";

function Tripcard({
  tripName,
  destination,
  fromDate,
  toDate,
  onDeleteTrip,
  id,
}: TripcardProps): JSX.Element {
  return (
    <>
      <div className="card-container">
        <div>
          <span className="tripName">{tripName}</span>
          <span className="destination">{destination}</span>
        </div>
        <span className="fromDate">{fromDate}</span> -
        <span className="toDate">{toDate}</span>
      </div>
      <div>
        <button id={id} onClick={() => onDeleteTrip(id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Tripcard;

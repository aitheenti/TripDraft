import type { TripcardProps } from "../Tripcard/trip-card.interface";

export interface TripFormProps {
  onAddTrip: (trip: TripcardProps) => void;
}

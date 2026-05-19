export interface TripcardProps {
  tripName: string;
  destination: string;
  fromDate: string;
  toDate: string;
  id: string;
  onDeleteTrip: (id: string) => void;
  onAddTrip?: (id: string) => void;
}

export interface TripCardHandler {
  onDeleteTrip: void;
}

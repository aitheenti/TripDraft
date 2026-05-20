export interface TripData {
  tripName: string;
  destination: string;
  fromDate: string;
  toDate: string;
  id: string;
}

export interface TripCardProps extends TripData {
  onDeleteTrip: (id: string) => void;
}

export type TripFormValues = Omit<TripData, "id">;

export interface TripCardHandler {
  onAddTrip?: (trip: TripFormValues) => void;
}

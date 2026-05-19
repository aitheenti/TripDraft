import { useState, type ChangeEvent } from "react";
import type { TripcardProps } from "../Tripcard/trip-card.interface";

const TripForm = ({ onAddTrip }: TripcardProps) => {
  const [form, setForm] = useState({
    tripName: "",
    destination: "",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTrip(form);
  };

  return (
    <div className="trip-form-container">
      <form>
        <div className="info-inputs-container">
          <input
            name="tripName"
            type="text"
            placeholder="Trip name"
            value={form.tripName}
            onChange={handleChange}
          />
          <input
            name="destination"
            type="text"
            placeholder="destination"
            value={form.destination}
            onChange={handleChange}
          />
        </div>
        <div className="date-container">
          <label htmlFor="fromDate">From:</label>
          <input
            name="fromDate"
            type="date"
            placeholder="from"
            value={form.fromDate}
            onChange={handleChange}
          />
          <label htmlFor="toDate">To:</label>
          <input
            name="toDate"
            type="date"
            placeholder="to"
            value={form.toDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TripForm;

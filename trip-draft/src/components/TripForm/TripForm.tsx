import { useState, type ChangeEvent } from "react";
import type { TripFormProps } from "./trip-form.interface";

const TripForm = ({ onAddTrip }: TripFormProps) => {
  const formInitialState = {
    tripName: "",
    destination: "",
    fromDate: "",
    toDate: "",
  };
  const [form, setForm] = useState(formInitialState);
  const [errors, setErrors] = useState(formInitialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateErrors = {
      tripName: form.tripName ? "" : "Trip Name is required",
      destination: form.destination ? "" : "Destination is required",
      fromDate: form.fromDate ? "" : "From Date is required",
      toDate: form.toDate ? "" : "To Name is required",
    };

    setErrors(validateErrors);

    if (Object.values(validateErrors).some(Boolean)) {
      return;
    }
    onAddTrip(form);
    setForm(formInitialState);
  };

  const handleBlur = () => {};

  return (
    <div className="trip-form-container">
      <form onSubmit={handleSubmit} noValidate>
        <div className="info-inputs-container">
          <div className="form-group">
            <input
              className="form-control"
              name="tripName"
              type="text"
              placeholder="Trip name"
              value={form.tripName}
              onChange={handleChange}
              required={true}
              onBlur={handleBlur}
            />
            <div>
              {errors.tripName && (
                <span className="text-red-500 text-xs">{errors.tripName}</span>
              )}
            </div>
            <input
              className="form-control"
              name="destination"
              type="text"
              placeholder="destination"
              value={form.destination}
              onChange={handleChange}
              required={true}
              onBlur={handleBlur}
            />
            <div>
              {errors.destination && (
                <span className="text-red-500 text-xs">
                  {errors.destination}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="date-container">
          <label htmlFor="fromDate">From:</label>
          <input
            name="fromDate"
            type="date"
            placeholder="from"
            value={form.fromDate}
            onChange={handleChange}
            required={true}
            onBlur={handleBlur}
          />
          <div>
            {errors.fromDate && (
              <span className="text-red-500 text-xs">{errors.fromDate}</span>
            )}
          </div>
          <label htmlFor="toDate">To:</label>
          <input
            name="toDate"
            type="date"
            placeholder="to"
            value={form.toDate}
            onChange={handleChange}
            required={true}
            onBlur={handleBlur}
          />
          <div>
            {errors.toDate && (
              <span className="text-red-500 text-xs">{errors.toDate}</span>
            )}
          </div>
        </div>
        <div>
          <button className="button button-primary button-md" type="submit">
            Add Trip
          </button>
        </div>
      </form>
    </div>
  );
};

export default TripForm;

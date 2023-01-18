import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";

const ReservationForm = ({
  formType = "new",
  reservationsError,
  first_name,
  last_name,
  mobile_number,
  people,
  reservation_date,
  reservation_time,
  onChange,
  onSubmit,
}) => {
  const [minTime, setMinTime] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (formType === "new") {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();
      const currentTime = `${currentHour}:${currentMinutes}`;
      setMinTime(currentTime);
    } else {
      setMinTime(null);
    }
  }, [formType]);

  return (
    <div className="row justify-content-center">
      <form className="col-lg-10" onSubmit={onSubmit}>
        <h1 className="text-center py-4">
          {formType === "edit" ? "Edit" : "New"} Reservation
        </h1>
        <ErrorAlert error={reservationsError} />
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            value={first_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            value={last_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile_number">Mobile Number</label>
          <input
            className="form-control"
            type="tel"
            name="mobile_number"
            placeholder="xxx-xxx-xxxx"
            value={mobile_number}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reservation_date">Reservation Date</label>
          <input
            className="form-control"
            type="date"
            name="reservation_date"
            id="reservation_date"
            value={reservation_date}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reservation_time">Time</label>
          <input
            className="form-control"
            type="time"
            name="reservation_time"
            id="reservation_time"
            value={reservation_time}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="people">Party Size</label>
          <input
            className="form-control"
            type="text"
            name="people"
            id="people"
            placeholder="Please enter your party's size"
            value={people}
            onChange={onChange}
            required
          />
        </div>

        <div className="buttons mt-2">
          <button className="btn btn-dark mr-2" type="submit">
            Submit
          </button>

          <button
            onClick={() => history.goBack()}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;

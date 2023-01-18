import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL as url } from "../utils/api";
import ReservationForm from "./ReservationForm";

const NewReservation = () => {
  const history = useHistory();
  const [reservation, setReservation] = useState({});
  const [reservationsError, setReservationsError] = useState(null);
  const [partySizeError, setPartySizeError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (reservation.people <= 0) {
      setPartySizeError("Party size must be greater than 0");
    } else {
      setPartySizeError(null);
      try {
        await axios.post(`${url}/reservations`, reservation);
        history.push("/reservations");
      } catch (err) {
        setReservationsError(err.response.data);
      }
    }
  };

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  return (
    <ReservationForm
      formType="new"
      reservation={reservation}
      reservationsError={reservationsError}
      partySizeError={partySizeError}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default NewReservation;

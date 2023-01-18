import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import ReservationForm from "./ReservationForm";

const EditReservation = () => {
  const { reservation_id } = useParams();
  const history = useHistory();
  const [reservation, setReservation] = useState({});
  const [reservationsError, setReservationsError] = useState(null);
  const [partySizeError, setPartySizeError] = useState(null);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const result = await axios.get(`/api/reservations/${reservation_id}`);
        setReservation(result.data);
      } catch (err) {
        setReservationsError(err.response.data);
      }
    };
    fetchReservation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (reservation.people <= 0) {
      setPartySizeError("Party size must be greater than 0");
    } else {
      setPartySizeError(null);
      try {
        await axios.put(`/api/reservations/${reservation_id}`, reservation);
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
    <>
      <ReservationForm
        formType="edit"
        reservation={reservation}
        reservationsError={reservationsError}
        partySizeError={partySizeError}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default EditReservation;

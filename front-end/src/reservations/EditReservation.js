import { useHistory, useParams } from "react-router";

const EditReservation = async ({
  reservation,
  reservation_id,
  reservation_date,
  setReservationsError,
}) => {
  const history = useHistory();
  axios
    .put(`${url}/reservations/${reservation.reservation_id}`, {
      data: reservation,
    })
    .then((res) => {
      res.status === 200 &&
        history.push(`/dashboard?date=${reservation.reservation_date}`);
    })
    .catch((err) => {
      setReservationsError({ message: err.response.data.error });
    });
};

export default EditReservation;

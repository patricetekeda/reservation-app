import { useHistory, useParams } from "react-router";

import axios from "axios";
const history = useHistory();
function NewReservation({
  reservation,
  setReservationsError,
  reservation_date,
}) {
  axios
    .post(`${url}/reservations`, { data: reservation })
    .then((res) => {
      res.status === 201 &&
        history.push(`/dashboard?date=${reservation.reservation_date}`);
    })
    .catch((err) => {
      setReservationsError({ message: err.response.data.error });
    });

  return <div>NewReservation</div>;
}

export default NewReservation;

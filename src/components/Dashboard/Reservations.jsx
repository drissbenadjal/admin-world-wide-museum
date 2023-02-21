import { Link } from "react-router-dom";

export const Reservations = () => {
  return (
    <>
      <h2>Réservations</h2>
      <table className="resa__table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Nombre de place(s)</th>
            <th>Date</th>
            <th>Horaire</th>
            <th>Date de résevation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dupont</td>
            <td>Jean</td>
            <td>2</td>
            <td>24/10/2022</td>
            <td>11:00 - 12:00</td>
            <td>22/10/2022 13:45:00</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ResaTable = ({ reservations }) => {
  return (
    <table className="resaTable">
      <thead className="resaTable__head">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Prénom</th>
          <th scope="col">Nom</th>
          <th scope="col">Place(s)</th>
          <th scope="col">Date</th>
          <th scope="col">Horaire</th>
          <th scope="col">Date de réservation</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="resaTable__body">
        {reservations.map((r) => {
          const optionsDate = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          };

          let Date_reservation = new Date(r.date_reservation);
          Date_reservation = Date_reservation.toLocaleDateString(
            "fr-FR",
            optionsDate
          );
          Date_reservation = Date_reservation.replace(":", "h");
          let date_reservation = Date_reservation.split(" ")[0];
          let hour_reservation = Date_reservation.split(" ")[1];

          let date_creation_reservation = new Date(r.date_creation_reservation);
          date_creation_reservation =
            date_creation_reservation.toLocaleDateString("fr-FR", optionsDate);
          date_creation_reservation = date_creation_reservation.replace(
            ":",
            "h"
          );
          date_creation_reservation = date_creation_reservation.replace(
            " ",
            " à "
          );

          return (
            <tr key={r.id_reservation}>
              <td scope="row" data-label="Id">
                {r.id_reservation}
              </td>
              <td scope="row" data-label="Prénom">
                <p>
                  {r.prenom_reservation.length > 10
                    ? r.prenom_reservation.substring(0, 10) + "..."
                    : r.prenom_reservation}
                </p>
              </td>
              <td scope="row" data-label="Nom">
                <p>
                  {r.nom_reservation.length > 10
                    ? r.nom_reservation.substring(0, 10) + "..."
                    : r.nom_reservation}
                </p>
              </td>
              <td scope="row" data-label="Place(s)">
                <p>{r.place_reservation}</p>
              </td>
              <td scope="row" data-label="Date">
                <p>{date_reservation}</p>
              </td>
              <td scope="row" data-label="Horaire">
                <p>{hour_reservation}</p>
              </td>
              <td
                scope="row"
                data-label="Date de réservation"
                className="resaTable__dateResa"
              >
                <p>{date_creation_reservation}</p>
              </td>
              <td scope="row" className="resaTable__delete">
                <Link>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Iconly/Light-Outline/Delete">
                      <g id="Delete">
                        <path
                          id="Fill 1"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2466 22C10.8916 22 9.5706 21.985 8.2636 21.958C6.5916 21.925 5.4346 20.841 5.2456 19.129C4.9306 16.289 4.3916 9.59503 4.3866 9.52803C4.3526 9.11503 4.6606 8.75303 5.0736 8.72003C5.4806 8.70903 5.8486 8.99503 5.8816 9.40703C5.8866 9.47503 6.4246 16.146 6.7366 18.964C6.8436 19.937 7.3686 20.439 8.2946 20.458C10.7946 20.511 13.3456 20.514 16.0956 20.464C17.0796 20.445 17.6116 19.953 17.7216 18.957C18.0316 16.163 18.5716 9.47503 18.5776 9.40703C18.6106 8.99503 18.9756 8.70703 19.3846 8.72003C19.7976 8.75403 20.1056 9.11503 20.0726 9.52803C20.0666 9.59603 19.5246 16.307 19.2126 19.122C19.0186 20.869 17.8646 21.932 16.1226 21.964C14.7896 21.987 13.5036 22 12.2466 22Z"
                          fill="#b8b9bb"
                        />
                        <path
                          id="Fill 3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.708 6.98938H3.75C3.336 6.98938 3 6.65338 3 6.23938C3 5.82538 3.336 5.48938 3.75 5.48938H20.708C21.122 5.48938 21.458 5.82538 21.458 6.23938C21.458 6.65338 21.122 6.98938 20.708 6.98938Z"
                          fill="#b8b9bb"
                        />
                        <path
                          id="Fill 5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.4403 6.98937C16.3023 6.98937 15.3143 6.17837 15.0903 5.06237L14.8473 3.84637C14.7963 3.66137 14.5853 3.50037 14.3453 3.50037H10.1123C9.87233 3.50037 9.66133 3.66137 9.60033 3.89237L9.36733 5.06237C9.14433 6.17837 8.15533 6.98937 7.01733 6.98937C6.60333 6.98937 6.26733 6.65337 6.26733 6.23937C6.26733 5.82537 6.60333 5.48937 7.01733 5.48937C7.44333 5.48937 7.81333 5.18537 7.89733 4.76737L8.14033 3.55137C8.38733 2.61937 9.19433 2.00037 10.1123 2.00037H14.3453C15.2633 2.00037 16.0703 2.61937 16.3073 3.50637L16.5613 4.76737C16.6443 5.18537 17.0143 5.48937 17.4403 5.48937C17.8543 5.48937 18.1903 5.82537 18.1903 6.23937C18.1903 6.65337 17.8543 6.98937 17.4403 6.98937Z"
                          fill="#b8b9bb"
                        />
                      </g>
                    </g>
                  </svg>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

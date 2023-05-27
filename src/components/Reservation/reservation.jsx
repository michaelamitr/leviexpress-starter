import React from 'react';
import './reservation.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export const Reservation = () => {
  const [reservation, setReservation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
      .then((response) => response.json())
      .then((data) =>
        // console.log(data),
        setReservation(data.results),
      );
  }, []);
  return (
    <>
      {reservation && (
        <div className="reservation container">
          <h2>Vaše e-jízdenka č. {id}</h2>
          <div className="reservation__body">
            <div className="reservation__headings">
              <p>Datum cesty:</p>
              <p>Odjezd:</p>
              <p>Příjezd:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__info">
              <p>{reservation.date}</p>
              <p>
                {reservation.fromCity.name}, {reservation.fromCity.time}
              </p>
              <p>
                {reservation.toCity.name}, {reservation.toCity.time}
              </p>
              <p>{reservation.seatNumber}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

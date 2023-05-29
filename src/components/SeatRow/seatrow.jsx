import React from 'react';
import { Seat } from '../Seat/seat';

export const SeatRow = ({ row, rowSelectedSeat }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          key={seat.number}
          number={seat.number}
          isOccupied={seat.isOccupied}
          isSelected={rowSelectedSeat === seat.number ? true : false}
        />
      ))}
    </div>
  );
};

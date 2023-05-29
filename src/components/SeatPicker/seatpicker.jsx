import React from 'react';
import './seatpicker.css';
import { SeatRow } from '../SeatRow/seatrow';

export const SeatPicker = ({
  seats,
  journeyId,
  selectedSeat,
  onSeatSelected,
}) => {
  const testRow = [
    {
      number: 33,
      isOccupied: false,
    },
    {
      number: 29,
      isOccupied: true,
    },
    {
      number: 25,
      isOccupied: false,
    },
  ];

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((seat, index) => (
          <SeatRow
            key={index}
            row={seat}
            rowSelectedSeat={selectedSeat}
            onSeatSelected={onSeatSelected}
          />
        ))}
      </div>
    </div>
  );
};

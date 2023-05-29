import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail/journeydetail';
import { useNavigate } from 'react-router-dom';
import { SeatPicker } from '../SeatPicker/seatpicker';

export const Home = () => {
  const navigate = useNavigate();

  const [journey, setJourney] = useState(null);

  const [userSeat, setUserSeat] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
    setUserSeat(journey.autoSeat);
  };

  const handleSeat = (newSeatNumber) => {
    setUserSeat(newSeatNumber);
  };

  console.log('This seat: ' + userSeat);

  const handleBuy = () => {
    console.log('funguju!');

    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: userSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => navigate(`/reservation/${data.results.reservationId}`));
  };

  console.log(journey);
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
      {journey && (
        <SeatPicker
          seats={journey.seats}
          journeyId={journey.journeyId}
          selectedSeat={userSeat}
          onSeatSelected={handleSeat}
        />
      )}
      {journey && (
        <div className="controls container">
          <button className="btn btn--big" type="button" onClick={handleBuy}>
            Rezervovat
          </button>
        </div>
      )}
    </main>
  );
};

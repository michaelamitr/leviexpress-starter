import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail/journeydetail';

export const Home = () => {
  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  const [journey, setJourney] = useState(null);

  console.log(journey);
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
    </main>
  );
};

import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  const [journey, setJourney] = useState(null);

  console.log(journey);
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <p>Nalezeno spojení s id {journey.journeyId}</p>}
    </main>
  );
};

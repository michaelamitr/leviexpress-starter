import React from 'react';
import './journeydetail.css';
import { BusStop } from '../BusStop/busstop';

export const JourneyDetail = ({ journey }) => {
  console.log(journey);
  return (
    <div className="journey-detail container">
      <h3>Podrobnosti cesty</h3>
      <div className="stops">
        {journey.stops.map((stop) => (
          <BusStop
            key={stop.code}
            name={stop.name}
            station={stop.station}
            time={stop.time}
          />
        ))}
      </div>
    </div>
  );
};

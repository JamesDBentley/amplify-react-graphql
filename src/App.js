// App.js
import React, { useState } from 'react';
import GolfEventList from './GolfEventList';
import AddGolfEventForm from './AddGolfEventForm';

function App() {
  // State to manage golf events
  const [events, setEvents] = useState([]);

  // Function to add a new golf event to the list
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="App">
      <h1>Golf Charity App</h1>
      {/* Component for adding a new golf event */}
      <AddGolfEventForm onAddEvent={addEvent} />
      {/* Component to display the list of golf events */}
      <GolfEventList events={events} />
    </div>
  );
}

export default App;

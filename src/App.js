// App.js
import React, { useState } from 'react';
import GolfEventList from './GolfEventList';
import AddGolfEventForm from './AddGolfEventForm';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.heading}>Golf Charity App</h1>
      <AddGolfEventForm onAddEvent={addEvent} />
      <GolfEventList events={events} />
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    margin: '20px',
  },
  heading: {
    color: '#333',
  },
};

export default App;

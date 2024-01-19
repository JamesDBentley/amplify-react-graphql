

// GolfEventList.js
import React from 'react';

function GolfEventList({ events }) {
  const listItemStyle = {
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div>
      <h2 style={styles.heading}>Golf Events</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {events.map((event, index) => (
          <li key={index} style={listItemStyle}>
            {event.name} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  heading: {
    color: '#555',
  },
};

export default GolfEventList;

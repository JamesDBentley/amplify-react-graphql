// AddGolfEventForm.js
import React, { useState } from 'react';

function AddGolfEventForm({ onAddEvent }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleAddEvent = () => {
    if (name && date) {
      const newEvent = { name, date };
      onAddEvent(newEvent);
      setName('');
      setDate('');
    }
  };

  return (
    <div>
      <h2 style={styles.heading}>Add Golf Event</h2>
      <div>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
      </div>
      <div>
        <label style={styles.label}>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
      </div>
      <button onClick={handleAddEvent} style={styles.button}>
        Add Event
      </button>
    </div>
  );
}

const styles = {
  heading: {
    color: '#555',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AddGolfEventForm;

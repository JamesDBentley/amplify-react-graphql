// AddGolfEventForm.js
import React, { useState } from 'react';

function AddGolfEventForm({ onAddEvent }) {
  // State to manage form input values
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  // Function to handle adding a new golf event
  const handleAddEvent = () => {
    if (name && date) {
      const newEvent = { name, date };
      // Call the parent component's function to add the new event
      onAddEvent(newEvent);
      // Clear the form inputs after adding the event
      setName('');
      setDate('');
    }
  };

  return (
    <div>
      <h2>Add Golf Event</h2>
      <div>
        {/* Input for the golf event name */}
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        {/* Input for the golf event date */}
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      {/* Button to trigger adding the new golf event */}
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
}

export default AddGolfEventForm;

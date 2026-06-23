import React, { useState } from 'react';

const DynamicBotManager = () => {
  const [bots, setBots] = useState([
    { id: '1', name: 'Email Bot', status: 'Active' },
    { id: '2', name: 'Data Bot', status: 'Inactive' }
  ]);

  const [newBot, setNewBot] = useState({ id: '', name: '', status: '' });

  // Update newBot as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewBot(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add new bot to list
  const addBotToList = () => {
    if (!newBot.id || !newBot.name || !newBot.status) {
      alert("Please fill in all fields before adding a bot.");
      return;
    }

    setBots(prev => [...prev, newBot]);

    // Clear input fields
    setNewBot({ id: '', name: '', status: '' });
  };

  // Delete bot by ID
  const deleteBot = (id) => {
    setBots(prev => prev.filter(bot => bot.id !== id));
  };

  return (
    <div className='dynamic-bot-manager'>
      <h1>Dynamic Bot Manager</h1>

      {/* Input fields */}
      <div className='input-section'>
        <input
          type='text'
          name='id'
          placeholder='Bot ID'
          value={newBot.id}
          onChange={handleInputChange}
        />

        <input
          type='text'
          name='name'
          placeholder='Bot Name'
          value={newBot.name}
          onChange={handleInputChange}
        />

        <input
          type='text'
          name='status'
          placeholder='Bot Status'
          value={newBot.status}
          onChange={handleInputChange}
        />

        <button onClick={addBotToList}>Add Bot</button>
      </div>

      {/* Bot list */}
      <ul>
        {bots.map(bot => (
          <li key={bot.id}>
            <strong>{bot.name}</strong>
            <span> (ID: {bot.id}) — Status: {bot.status}</span>

            <button onClick={() => deleteBot(bot.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicBotManager;

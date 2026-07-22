import React, { useState } from 'react';

function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Task 2: Style object
  const categoryStyles = {
    readEmails: { backgroundColor: 'orange', transition: '0.3s' },
    sendEmails: { backgroundColor: 'yellow', transition: '0.3s' },
    webParsing: { backgroundColor: 'blue', transition: '0.3s' },
    default: { backgroundColor: 'white', transition: '0.3s' }
  };

  // Task 4: Validate category
  const validateCategory = (category) => {
    return selectedCategory === category;
  };

  // Task 6: Update selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // BONUS: Reset button
  const resetCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      {/* Task 5: Render category buttons */}
      <button
        style={validateCategory('readEmails') ? categoryStyles.readEmails : categoryStyles.default}
        onClick={() => handleCategoryClick('readEmails')}
      >
        Read Emails
      </button>

      <button
        style={validateCategory('sendEmails') ? categoryStyles.sendEmails : categoryStyles.default}
        onClick={() => handleCategoryClick('sendEmails')}
      >
        Send Emails
      </button>

      <button
        style={validateCategory('webParsing') ? categoryStyles.webParsing : categoryStyles.default}
        onClick={() => handleCategoryClick('webParsing')}
      >
        Web Parsing
      </button>

      {/* BONUS: Reset */}
      <button onClick={resetCategory} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default CategorySelector;

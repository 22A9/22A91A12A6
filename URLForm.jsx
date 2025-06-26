import React, { useState } from 'react';

function URLForm() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('URL submitted: ' + url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default URLForm;

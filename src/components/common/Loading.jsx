import React from 'react';
import './Loading.css';

export default function Loading({ fullPage = false }) {
  return (
    <div className={`loading ${fullPage ? 'loading--full' : ''}`} role="status" aria-label="Loading">
      <span className="loading__dot" />
      <span className="loading__dot" />
      <span className="loading__dot" />
    </div>
  );
}

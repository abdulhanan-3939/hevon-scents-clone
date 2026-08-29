import React from 'react';
import './FragranceNotes.css';

/**
 * FragranceNotes — TOP / HEART / BASE display for the product detail page.
 */
export default function FragranceNotes({ notes, description }) {
  const hasAnyNotes =
    notes.top.length > 0 || notes.heart.length > 0 || notes.base.length > 0;

  if (!hasAnyNotes) {
    return (
      <div className="frag-notes frag-notes--empty">
        <p className="frag-notes__placeholder">
          {/* [FRAGRANCE NOTES — ADD VERIFIED DATA BEFORE LAUNCH] */}
          Fragrance note details will be added once verified ingredient
          information is available.
        </p>
      </div>
    );
  }

  return (
    <div className="frag-notes">
      <p className="eyebrow frag-notes__eyebrow">Fragrance Profile</p>
      {description && (
        <p className="frag-notes__profile-text">{description}</p>
      )}
      <div className="frag-notes__accord" aria-hidden="true" />
      <dl className="frag-notes__list">
        <NoteGroup label="Top Notes"   notes={notes.top} />
        <NoteGroup label="Heart Notes" notes={notes.heart} />
        <NoteGroup label="Base Notes"  notes={notes.base} />
      </dl>
    </div>
  );
}

function NoteGroup({ label, notes }) {
  if (!notes || notes.length === 0) return null;
  return (
    <div className="frag-notes__group">
      <dt className="eyebrow frag-notes__group-label">{label}</dt>
      <dd className="frag-notes__group-values serif">
        {notes.join(' · ')}
      </dd>
    </div>
  );
}

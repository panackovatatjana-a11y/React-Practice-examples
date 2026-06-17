import React from 'react';

export default function ProfileCard({ image = '', name = 'Anonymous', jobTitle = 'Professional', bio = 'No bio available.', skills = [] }) {
  return (
    <div className="card">
      {image ? <img src={image} alt={name} /> : null}
      <h2>{name}</h2>
      <h4>{jobTitle}</h4>
      <p>{bio}</p>

      <div className="skills">
        {skills.length > 0 ? (
          skills.map((s, i) => (
            <span key={i} className="tag">{s}</span>
          ))
        ) : (
          <span className="tag">No skills available</span>
        )}
      </div>
    </div>
  );
}

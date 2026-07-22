import React from 'react';

const JobStatus = ({ title = "", categories = [] }) => {
  return (
    <section>
      <article className="jobStateArt">
        
        {/* Job Title */}
        <p className='textArticle'>{title || "No activity"}</p>

        <div className="jobBox">
          <div className="jobStatBox">

            {/* Categories */}
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((cat, index) => (
                <span key={index} className="category">{cat}</span>
              ))
            ) : (
              <span className="category empty">No categories</span>
            )}

          </div>
        </div>

      </article>
    </section>
  );
};

export default JobStatus;


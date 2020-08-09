import React from 'react';
import { Link } from 'react-router-dom';

import { GistContext } from '../../App.js';
import './index.css';

const GistList = () => {
  return (
    <GistContext.Consumer>
      {({ gists }) => (
        <div>
          {gists.length ? (
            <div>
              <h2>Gist List</h2>
              <ul>
                {gists.map((gist) => (
                  <Link key={gist.id} to={`/gists/${gist.id}`}>
                    <li className="card">
                      <p>Description: {gist.description}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </GistContext.Consumer>
  );
};

export default GistList;

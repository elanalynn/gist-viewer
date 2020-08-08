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
                  <li key={gist.id}>
                    <Link to={`/gists/${gist.id}`}>
                      <p>Description: {gist.description}</p>
                      <p>URL: {gist.url}</p>
                    </Link>
                  </li>
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

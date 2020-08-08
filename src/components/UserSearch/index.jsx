import React from 'react';

import { fetchList } from '../../utilities/fetchGists';
import { GistContext } from '../../App.js';

import './index.css';

const UserSearch = () => {
  const handleClick = async (e, setGists) => {
    e.preventDefault();
    const username = document.querySelector('#user-name').value;
    const result = await fetchList(username);
    setGists(result);
  };

  return (
    <GistContext.Consumer>
      {({ gists, setGists }) => {
        return (
          <form>
            <label>Search for a GitHub User</label>
            <input id="user-name" type="text" />
            <button onClick={(e) => handleClick(e, setGists)}>
              Search Gists
            </button>
          </form>
        );
      }}
    </GistContext.Consumer>
  );
};

export default UserSearch;

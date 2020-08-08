import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserSearch from './components/UserSearch';
import GistList from './components/GistList';
import GistDetail from './components/GistDetail';

import './App.css';

export const GistContext = React.createContext({
  gists: [],
  setGists: () => {},
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setGists = (gists) => {
      this.setState({ gists: gists });
    };

    this.state = {
      gists: [],
      setGists: this.setGists,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gist Viewer</h1>
        </header>
        <main>
          <GistContext.Provider value={this.state}>
            <Router>
              <Switch>
                <Route path="/gists/:id">
                  <GistDetail />
                </Route>
                <Route path="/">
                  <UserSearch />
                  <GistList />
                </Route>
              </Switch>
            </Router>
          </GistContext.Provider>
        </main>
      </div>
    );
  }
}

export default App;

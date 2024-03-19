import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import CharacterSelectionPage from '../CharacterSelectionPage/CharacterSelectionPage';
import CharacterDisplayPage from '../CharacterDisplayPage/CharacterDisplayPage';
import NewCharacter from '../NewCharacter/NewCharacter';
import NotesPage from '../NotesPage/NotesPage';

import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RollHistory from '../RollHistory/RollHistory';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/character-selection */}
          <Redirect exact from="/" to="/character-selection" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/character-selection will show the CharacterSelectionPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/character-selection */}
          <ProtectedRoute
            // logged in shows CharacterSelectionPage else shows LoginPage
            exact
            path="/character-selection"
          >
            <CharacterSelectionPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows CharacterDisplayPage else shows LoginPage
            exact
            path="/character/:id"
          >
            <CharacterDisplayPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows NotesPage else shows LoginPage
            exact
            path="/notes/:id"
          >
            <NotesPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows NewCharacter else shows LoginPage
            exact
            path="/new"
          >
            <NewCharacter />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows RollHistory else shows LoginPage
            exact
            path="/roll-history"
          >
            <RollHistory />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /character-selection page
              <Redirect to="/character-selection" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /character-selection page
              <Redirect to="/character-selection" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;

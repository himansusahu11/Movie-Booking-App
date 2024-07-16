import React, { Suspense, useState } from "react";
import MovieList from "./Pages/LandingPage/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import UseEffectExample from "./Components/UseEffectExample/UseEffectExample";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import AuthHoc from "./hoc/AuthHOC";
import CreateMovie from "./Pages/CreateMovie/CreateMovie";
import constants from "./utils/constants";
import Example from "./Components/Example/Example";
import RefCounter from "./Components/Referances/Ref";
import Fragment from "./Components/Fragments/Fragment";
import ErrorBoundries from "./Components/ErrorBoundries/ErrorBoundries";
import Main from "./Components/ErrorBoundries/ErrorBoundries";
//Lazy loading
const MovieDetails = React.lazy(() =>
  import("./Pages/MovieDetails/MovieDetails")
);
const MovieTheatres = React.lazy(() =>
  import("./Pages/MovieTheatres/MovieTheatres")
);
const Bookings = React.lazy(() => import("./Pages/Bookings/Bookings"));
const PageNotFound = React.lazy(() =>
  import("./Pages/PageNotFound/PageNotFound")
);

export const LangContext = React.createContext();
export const ThemeContext = React.createContext();
function App() {
  const roles = constants.roles;
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Suspense fallback={<div>Loading your component......</div>}>
        <Router>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="/example" element={<Example />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/" element={<MovieList />} />
            <Route
              path="/movie/:movieId"
              element={
                <LangContext.Provider value={language}>
                  <MovieDetails />
                </LangContext.Provider>
              }
            />
            <Route
              path="/add"
              element={
                <AuthHoc allowedRoles={roles.onlyAdmin}>
                  <CreateMovie />
                </AuthHoc>
              }
            />
            <Route
              path="/buyTickets/:movieId"
              element={
                <AuthHoc allowedRoles={roles.bothAdminAndCustomer}>
                  <MovieTheatres />
                </AuthHoc>
              }
            />
            <Route
              path="/buyTickets/:movieId/:theatreId"
              element={
                <AuthHoc allowedRoles={roles.bothAdminAndCustomer}>
                  <Bookings />
                </AuthHoc>
              }
            />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/refs" element={<RefCounter />} />
            <Route path="/fragment" element={<Fragment />} />
            <Route path="/errorBoundries" element={<Main />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;

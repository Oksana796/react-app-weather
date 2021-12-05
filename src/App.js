//import logo from './logo.svg';
import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <footer>
          This project was coded by Oksana and is{" "}
          <a
            href="https://github.com/Oksana796/react-app-weather"
            className="GitHub-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://react-app-weather-finish.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

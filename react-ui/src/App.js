import React from "react";
import { Button } from "@mui/material";
import rsLogo from "./logo-with-name.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Button
          variant="contained"
          target="_blank"
          href="https://github.com/10xcodecamp/rs_challenge/blob/main/README.md"
          size="large"
          sx={{ m: 2, bgcolor: "#00003C" }}
          disableElevation
        >
          Instructions
        </Button>
        <Button
          variant="contained"
          target="_blank"
          href="mailto:info@10xcodecamp.com?subject=RS Developer Challenge"
          size="large"
          sx={{ m: 2, bgcolor: "#00003C" }}
          disableElevation
        >
          Ask a Question
        </Button>
      </main>
    </div>
  );
}

export default App;

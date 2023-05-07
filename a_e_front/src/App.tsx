import React from "react";
import "./styles/App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { About } from "./components/About/About";
import { Bfp } from "./components/Bgp/Bfp";
import { Expirience } from "./components/Experience/Experience";
import { Stack } from "./components/Stack/Stack";

function App() {
  return (
    <div className='App'>
      <section className='app_section_wave'>
        <Bfp />
      </section>
      <header className='App-header'>
        <NavBar />
      </header>
      <section id='About' className='app_section_about'>
        <About />
      </section>
      <section id='Exp' className='app_section_expirience'>
        <Expirience />
      </section>
      <section id='Stack'>
        <Stack />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;

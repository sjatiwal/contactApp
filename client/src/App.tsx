import React from "react";
import Header from "./component/header";
import Section from "./component/section";
import NewContact from "./pages/newContact";
import CreateContact from "./pages/createContact";
import EditContact from "./pages/editContact";
import ChartMap from "./pages/chartsandMaps";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Section />
      <Routes>
        <Route path="/" element={<NewContact />} />
        <Route path="/createContact" element={<CreateContact />} />
        <Route path="/editContact/:id" element={<EditContact />} />
        <Route path="/chart&Map" element={<ChartMap />} />
      </Routes>
    </Router>
  );
}

export default App;

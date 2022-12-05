import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import User from "./components/user/user";
import Home from "./components/home/home";
import Score from "./components/score/score";
import DataList from "./components/dataList/dataList";
import Tab1 from "./components/tab1";
import Tab2 from "./components/tab2";
import Dashboard from "./components/dashboard";
import Table from "./components/table";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/table" element={<Table />} />

        <Route path="/score" element={<Score />} />
        <Route path="/dataList" element={<DataList />}>
          <Route path="tab1" element={<Tab1 />} />
          <Route path="tab2" element={<Tab2 />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ApplyForm from "../pages/ApplyForm/ApplyForm";
import JobDetail from "../pages/Jobs/JobDetail";
import JobList from "../pages/Jobs/JobList";
import Success from "../pages/ApplyForm/Success";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs/" element={<JobList />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
      <Route path="/apply/:id" element={<ApplyForm />} />
      <Route path="/apply/:id/success" element={<Success />} />
    </Routes>
  );
}

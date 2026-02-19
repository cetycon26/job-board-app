import React from "react";
import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./layouts/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  console.log("App rendering");
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./global.css";
import Signin from "./_auth/forms/Signin";
import { Home } from "./_root/pages";
import Signup from "./_auth/forms/Signup";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;

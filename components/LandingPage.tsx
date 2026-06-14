"use client"

import LandingHero from "./LandingHero";
import LandingNavbar from "./LandingNavbar";

import React from "react";

// LANDING PAGE

export default function LandingPage({ children } : { children: React.ReactNode }) {
  return (
    <div className="bg-cozy-50">
      <LandingNavbar/>
      {children ? children : <LandingHero/>}
    </div>
  );
}

"use client"

import Hero from "@/components/Hero"
import Navbar from "./Navbar";

// LANDING PAGE

export default function LandingPage() {
  return (
    <div>
      <Navbar isLandingPage={true}/>
      <Hero/>
    </div>
  );
}

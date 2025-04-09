"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "./routes/navbar";
import LandingPage from "./landing-page/landingPage";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <LandingPage/>
    </main>
  );
}
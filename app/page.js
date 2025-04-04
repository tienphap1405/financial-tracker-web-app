"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "./routes/navbar";
import LandingPage from "./landing-page/landingPage";

export default function Home() {
  const router = useRouter();
  
  const handleOnPress = () => {
    console.log("Button pressed");
    router.push("/overview-page");
  };
  console.log("LandingPage component:", LandingPage);
  return (
    <main>
      <LandingPage handleOnPress={handleOnPress}/>
    </main>
  );
}
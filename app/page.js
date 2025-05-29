"use client";
import { useRouter } from "next/navigation";
import LandingPage from "./landing-page/landingPage";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <LandingPage/>
    </main>
  );
}
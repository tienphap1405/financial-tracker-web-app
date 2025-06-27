"use client";
import { useRouter } from "next/navigation";
import LandingPage from "./components/landingPage";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <LandingPage/>
    </main>
  );
}
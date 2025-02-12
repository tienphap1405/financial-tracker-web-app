import Navbar from "./routes/navbar";
import Overview from "./components/overview";
export default function Home() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
      </header>
      
      <section>
        <Overview></Overview>
      </section>
    </main>
  );
}

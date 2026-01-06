import Navbar from "../components/navbar";
export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {/* Optionally a sidebar or layout container */}
      <main className="pt-20">{children}</main>
    </>
  );
}
import { useState, useEffect } from "react";

//pages
import { Login } from "../components/Login";

//components
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { Main } from "../components/Dashboard/Main";

export const Dashboard = () => {
  const [user, setUser] = useState(false);

  const handleLogin = () => {
    setUser(true);
  };

  const handleLogout = () => {
    setUser(false);
  };

  if (!user) {
    return (
      <Login />
    );
  }

  if (user) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <main>
          <Main />
        </main>
        <button onClick={handleLogout}>Logout</button>
        <Footer />
      </>
    );
  }
}

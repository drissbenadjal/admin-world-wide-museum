import { useState, useEffect } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(false);
  }, []);

  if (!user) {
    return <h1>Not logged in</h1>;
  }

  if (user) {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

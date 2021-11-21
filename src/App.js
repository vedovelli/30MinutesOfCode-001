import { useEffect, useState } from "react";
import { http } from "./service/api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    http.get("/users").then(({ data }) => setUsers(data.users));
  }, []);

  return <div>{JSON.stringify(users)}</div>;
}

export default App;

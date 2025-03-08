import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1 className="text-center text-3xl font-semibold mt-2 py-4">
        useReducer
      </h1>
      <form className="flex-center text-3xl font-semibold mt-2 py-4">
        <input
          className="border rounded-lg px-2 px-1"
          type="text"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border rounded-lg px-2 px-1"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </>
  );
}

export default App;

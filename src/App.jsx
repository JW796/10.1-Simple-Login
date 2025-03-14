import { useReducer, useState } from "react";

const logInReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      
      return {
        ...state,
        [action.fieldName]: action.payload
      }
    }
    case "login": {
      return{
        ...state,
        error: "",
      }
    }
    case "sucess": {
      return {
        ...state,
        loggedIn: true,
        password: "",
      }
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password",
        loggedIn: false,
        username: "",
        password: "",
      }
    }
    case "logout": {
      return {
        ...state,
        loggedIn: false,
      }
    }
    default: return state;
  }
}

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [state, dispatch] = useReducer(logInReducer,

  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    try {
      if (username === "James" && password === "1234") {
        setLoggedIn(true);
      } else {
        throw Error;
      }
      setPassword("");
    } catch (error) {
      setError("Incorrect username or password");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl font-semibold mt-2 py-4">
        useReducer
      </h1>
      <div>
        {loggedIn ? (
          <>
            <div className="flex flex-col items-center gap-4">
              <h2 classNames="text-center text-3xl mt-4">
                Welcome {username}!
              </h2>
              <button className="bg-blue-600 text-white text-lg font-medium rounded-lg py-3"
              onClick={() => setLoggedIn(false)}
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <form
            className="flex-center text-3xl font-semibold mt-2 py-4"
            onSubmit={handleSubmit}
          >
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
            <button
              className="bg-blue-600 text-white text-lg font-medium rounded-lg py-3"
              type="submit"
            >
              Log In
            </button>
            <p className="text-red-500 text-center">{error}</p>
          </form>
        )}
      </div>
    </>
  );
}

export default App;

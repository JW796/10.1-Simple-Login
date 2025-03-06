function App() {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold mt-2 py-4">
        {" "}
        useReducer
      </h1>
      <form action="">
        <input
          type="text"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </>
  );
}

export default App;

import { Nav } from "./components";
import { Home, Login, Register, Settings, Single, Write } from "./pages";
import "./scss/index.scss";

function App() {
  return (
    <>
      <Nav />
      {/* <Home />
      <Single />
      <Write /> */}
      <Register />
      <Login />
      <Settings />
    </>
  );
}

export default App;

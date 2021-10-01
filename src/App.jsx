import { Nav } from "./components";
import { Home, Register, Single, Write } from "./pages";
import "./scss/index.scss";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Single />
      <Write />
      <Register />
    </>
  );
}

export default App;

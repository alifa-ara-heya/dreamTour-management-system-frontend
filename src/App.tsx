import { Outlet } from "react-router";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1>DreamTour management System</h1>
      <Button>Click me</Button>
      <Outlet />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Paginate from "./components/paginate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid items-center h-screen w-full ">
  <Paginate total={45} limit={5} />
      </div>
    </>
  );
}

export default App;

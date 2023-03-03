import { useState } from "react";
import MyList from "./List/MyList";
import OsobeList from "./List/OsobeList";

function App() {
  const [name, setName] = useState("Neki tekst");

  const handleChange = (e) => {
    console.log("handleChange");
    const value = e.target.value;
    setName(value);
  };

  return (
    <div>
      <MyList />
      <hr />
      {/* <h3><Osobe></h3> */}
      <OsobeList />
      <input value={name} onChange={handleChange} />
    </div>
  );
}

export default App;

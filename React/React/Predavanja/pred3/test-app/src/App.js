import ShowText from "./Components/ShowText";
import ShowMeTheMoney from "./Components/ShowMeTheMoney";
import ArrowFunc from "./Components/ArrowFunc";
import MyComponent from "./state/MyComponent";
import ChildrenComponent from "./state/ChildrenComponent";
import FuncComponent from "./state/FuncComponent";

function App() {
  return (
    <div>
      <ShowText ime="Pero" pozdrav={`Dobro jutro`} />
      <ShowMeTheMoney money={67} />
      <ArrowFunc />
      <ShowMeTheMoney money={104} />
      <MyComponent />
      <ChildrenComponent ime={`Jasna`} i children={`djeca`} />
      <FuncComponent />
    </div>
  );
}

export default App;

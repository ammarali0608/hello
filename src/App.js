import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import DestructingProps from "./components/DestructingProps";
import FuncitonClick from "./components/FuncitonClick";
import ClassCLick from "./components/ClassCLick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Ammar" className="pata-ni" />
      <Greet name="Ali">
        {" "}
        <p>This is prop children</p>
        <p>Now another ones</p>
        <p>Props are immutable mean value of props can't be changed</p>{" "}
      </Greet>
      <Welcome name="Ammar" />
      <Welcome name="Ali" />
      <Hello />
      <button>Action</button> */}
      {/* <Message /> */}
      {/* <Counter />
      <DestructingProps name="Ali" heroName="AA">
        {" "}
        <p>This is prop children</p>
        <p>Now another ones</p>
        <p>Props are immutable mean value of props can't be changed</p>{" "}
      </DestructingProps> */}
      {/* <FuncitonClick />
      <ClassCLick /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;

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
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function App() {
  return (
    <div className="App">
      <Stylesheet primary={true} />
      <Inline />
      <h3 className="error">Error</h3>
      <h3 className={styles.success}>Error</h3>
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
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <NameList />
    </div>
  );
}

export default App;

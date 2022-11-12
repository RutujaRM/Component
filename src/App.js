import "./styles.css";
import Profile from "./Component/Profile";
import Experience from "./Component/Experience";
import Skills from "./Component/Skills";

export default function App() {
  return (
    <div className="App">
      <Profile />
      <Experience />
      <Skills />
    </div>
  );
}

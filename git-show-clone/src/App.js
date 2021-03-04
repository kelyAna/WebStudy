import { Navigator } from "./common/Navigator/Navigator";
import { Container } from "./components/Container/Container";
import { HeaderProfile } from "./components/Header/HeaderProfile";

import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Navigator/>
      <HeaderProfile/>
      <Container/>
    </div>
  );
}

export default App;

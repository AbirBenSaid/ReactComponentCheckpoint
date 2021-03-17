import './App.css';
import Adress from "./Components2/Profile/Adress";
import FullName from "./Components2/Profile/FullName";
import ProfilePhoto from "./Components2/Profile/ProfilePhoto";
function App() {
  return (
    <div id='main'>
    <ProfilePhoto/>
    <FullName/>
    <Adress/>
    </div>
  );
}

export default App;

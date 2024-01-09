import avatar from './image/hmmm.png'
import cloud_image from './image/sticker.png'
import './App.scss';
import './componenets/HeaderButton'
import {HeaderButton} from "./componenets/HeaderButton";
import {Prompter} from "./componenets/Prompter";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="Avatar">
          <img className="Avatar-icon" src={avatar} alt="It is avtar icon" />
        </div>
        <HeaderButton name="About Me"/>
        <HeaderButton name="Skils"/>
        <HeaderButton name="Projects"/>

      </div>
        <div className="Section">
            <div className="Content-area-one"></div>

        </div>
        <div className="Section">
            <div className="Content-area-two"><Prompter/></div>
            <img className="Cloud-image" src={cloud_image} alt=" It is pepple ont the cloud"/>

        </div>

    </div>
  );
}

export default App;

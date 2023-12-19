import avatar from './image/hmmm.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="Avatar">
          <img className="Avatar-icon" src={avatar} alt="It is avtar icon" />
        </div>

      </div>
        <div className="Section">
            <div className="Content-area-one"></div>

        </div>
        <div className="Section">
            <div className="Content-area-two"></div>

        </div>

    </div>
  );
}

export default App;

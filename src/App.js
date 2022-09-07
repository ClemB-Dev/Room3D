import 'aframe';
import './css/App.css';
// Components
import Sign from './components/signs'
import Shelf from './components/shelf'
import Door from './components/door'
import Room from './components/room'
import Screen from './components/screen'
// Medias
import view from './img/window-view.jpg';
import video from './medias/video_test.mp4'
// Texture
import marbleTexture from './texture/marble-texture-black.jpg'
import woodTexture from './texture/wood-texture2.jpg';
import wallTexture from './texture/wall-texture.jpg';
import ceilingTexture from './texture/ceiling-texture.jpg';


function App() {
    let link = document.createElement('meta');
    link.setAttribute('name', 'apple-mobile-web-app-capable'); 
    link.content = document.location;
    document.getElementsByTagName('head')[0].appendChild(link);
    return (
    <a-body>
      <a-scene>
      <button className="info-btn">
        Edit
      </button>
        <a-camera position="0 8 0">
          <a-cursor></a-cursor>
        </a-camera>
        <a-assets>
          <img id='wood-texture' src={woodTexture} alt="wood-texture"></img>
          <img id='wall-texture' src={wallTexture} alt="wall-texture"></img>
          <img id='ceiling-texture' src={ceilingTexture} alt="ceiling-texture"></img>
          <img id='marble-texture' src={marbleTexture} alt="marble-texture"></img>
          <img id='door-view' src={view} alt="door-view"></img>
          <video controls id="video" autoPlay loop={true} src={video} webkit-playsinline="true" playsInline={true}></video>
        </a-assets>
        <Room></Room>
        <Screen></Screen>
          <Shelf></Shelf>
          <Door></Door>
          <Sign x={-14.9} y={7} z={-4} l={0} m={90} n={0} textValue="Nos articles" id={0}/>
          <Sign x={-14.9} y={8} z={2} l={0} m={90} n={0} textValue="Nos réseaux" id={1}/>
          <Sign x={-14.9} y={7} z={8} l={0} m={90} n={0} textValue="Notre logo" id={2}/>
          <Sign x={14.9} y={7} z={-4} l={0} m={-90} n={0} textValue="Photo 1" id={3}/>
          <Sign x={14.9} y={8} z={2} l={0} m={-90} n={0} textValue="Photo 2!" id={4}/>
          <Sign x={14.9} y={7} z={8} l={0} m={-90} n={0} textValue="Photo 3" id={5}/>
      </a-scene>
    </a-body>
  );
}

export default App;

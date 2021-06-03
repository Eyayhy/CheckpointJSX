import logo from './logo.svg';
import './App.css';
import './style.css';
import imageSrc from "./imageInSrc.jpg"

function App() {
  return (
   <>
   <div style ={{border:"solid 1px black" , maxWidth:"100vw"}} >
   <h1 className="title red">Eya</h1>
   <br>
   </br>
   <img className="public-img" src={imageSrc} alt='imageSrc'/>
  <br>
  </br>
  <img className="src-img" src="/imageInPublic.jpg" alt="imagePublic" />

  </div>
  <video width={320} height={240} controls>

 <source src="/myVideo.mp4" type="video/mp4" /> 
  </video> 
      
    </>
  );
}

export default App;

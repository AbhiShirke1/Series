import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Ndata from './Components/Ndata';

function App() {

  const d = (val)=>{
    return (
      <Body
          imgsrc = {val.imgsrc}
          names = {val.names}
          link = {val.link}
      />
    )
  }

  
  return (
    <>
    <Navbar/>
 
    {/* <Body/>
    <Body/>
    <Body/>
    <Body/>
    <Body/> */}

    {Ndata.map(d)}

    </>
  )
}

export default App;

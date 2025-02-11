import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Newin from "./components/Newin"
import Newinheadline from "./components/Newinheadline"
import Mobile  from "./components/Mobile"
import TV from "./components/TV"
import Homeappliances from "./components/Homeappliances"
import Recommendations from "./components/Recommendations"
import Explore from "./components/Explore"
import Else from "./components/Else"
import Service from "./components/Service"

function App() {

  return (
    <>
      <Navbar/>
      <Carousel/>
      <Newinheadline/>
      <Newin/>
      <Mobile/>
      <TV/>
      <Homeappliances/>
      <Recommendations/>
      <Explore/>
      <Else/>
      <Service/>
      
    </>
  )
}

export default App

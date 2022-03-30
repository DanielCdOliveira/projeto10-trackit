import { useLocation } from "react-router-dom";
import Header from "../../Utilities/Header";

function Habits() {
  const {image , token} = useLocation().state
  
  
  return (<>
   <Header image={image}/>
    <main>
      
    </main>
  
  </>
 )
  
}

export default Habits;

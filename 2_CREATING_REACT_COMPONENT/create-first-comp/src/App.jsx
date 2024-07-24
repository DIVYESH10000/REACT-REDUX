/*Component : It's basically a javascript function


function componentName/functionName () {
  return Code JSX
}

export default componentName; // To USE we export   // To reuse we export


returned code below looks like HTML but it's not: It's not HTML it's JSX(JavaScript XML) i.e. react converts that HTML into JSX code,
and JSX code gets converted into regular JS code.

*/

import GhostFreakButton from "./GhostFreakButton";
import Hello from "./Hello";
import Random from "./Random";


function App() {
  return  <div>
    <h1>Hello World! <br/>   
      Welcome to the world seen through my eyeholes.
    </h1>

    <GhostFreakButton></GhostFreakButton>

    <Hello></Hello>

    <Random/>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
  
  </div>
  
  
}

export default App;
import {Navbar} from './components';

import "./App.css";
function App() {
  return(
    <div>
      <Navbar/>

      <div className="all_information">
        <div class="information_container">
          <h1>About React.js</h1>
          <p>React.js is a big library of Javascript code to make it easier for developers to develop Javascript 
            code.</p>
        </div>
        <div class="image_container">
          <img src="https://miro.medium.com/v2/resize:fit:1200/1*WA_9JsyqFkge2HwYKcdJQw.png"></img>
        </div>
      </div>

    </div>
  )
}

export default App
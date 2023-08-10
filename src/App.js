import { useState } from 'react';
import Circle from './component/Circle';

import './index.css';

function App() {

   const [status, setStatus] = useState(true);

  return (
    <div className="App" onClick={() => {setStatus(!status)}}>
      <div className={status? "square" : "square squareMove"}></div>

      <Circle status={status} setStatus={setStatus} />
    </div>
  );
}

export default App;

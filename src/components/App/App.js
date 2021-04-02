import React, {useContext} from 'react';

import { Context } from "../../context";

import Start from '../Start/Start';

function App() {

  const {em, isMobile} = useContext(Context);

  return (
    <div className="App" style={{fontSize: em}}>
      <Start />
    </div>
  );
}

export default App;

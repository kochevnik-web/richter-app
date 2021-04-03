import React, {useContext} from 'react';

import { Context } from "../../context";

import Start from '../Start/Start';

function App() {

  const {em, isMobile} = useContext(Context);

  let clx = ['App'];

  if (isMobile) {
    clx.push('app-mobile');
  }

  return (
    <div className={clx.join(' ')} style={{fontSize: em}}>
      <Start />
    </div>
  );
}

export default App;

import React, {useContext} from 'react';

import { Context } from "../../context";

import Start from '../Start/Start';
import Level from '../Levels/Level';
import Final from '../Final/Final';

import levels from '../Levels/levels.data';

function App() {

  const {em, isMobile, countLevel} = useContext(Context);

  let clx = ['App'];

  if (isMobile) {
    clx.push('app-mobile');
  }

  const listLevels = levels.filter(el => {
    return el.id <= countLevel;
  }).map(el =>{
    return <Level key={el.id} data={el} children={el.component}/>
  });

  return (
    <div className={clx.join(' ')} style={{fontSize: em}}>
      <Start />
      <div className="levels">
        {listLevels}
      </div>
      {countLevel >= 10 ? <Final /> : null}
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

// import HookSwitcer from './useState/UseStateExample';
import EffectExample from './useEffect/UseEffect'



ReactDOM.render(
  <React.StrictMode>
    {/* <HookSwitcer/> */}
    <EffectExample/>
  </React.StrictMode>,
  document.getElementById('root')
);

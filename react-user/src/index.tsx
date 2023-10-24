import './public-path.js';
import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 初始化 state
const state = {}

function render(props) {
  const { container } = props;
  // React 17 写法
  // ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
  // React 18 写法
  createRoot(document.getElementById('root')).render( <App />)
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("子",state, prev);
  });
    //   props.setGlobalState({...state, age:20, username:'red'});
 

  render(props);
}

export async function unmount(props) {
  const { container } = props;
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
  // React 18 写法
  createRoot(document.getElementById('root')).render( <App />)
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

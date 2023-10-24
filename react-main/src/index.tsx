import './public-path.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//注册微应用
import { registerMicroApps, start } from 'qiankun';
import { initGlobalState, MicroAppStateActions } from 'qiankun';
// 初始化 state
const state = {
  username:'',
  age:''
}
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("主",state, prev);
});
setTimeout(() => {
  actions.setGlobalState({...state, age:18, username:'pink'});
}, 2000)
actions.offGlobalStateChange();

registerMicroApps([
  // {
  //   name: 'reactUser',
  //   entry: '//localhost:8080',
  //   container: '#reactUser',
  //   activeRule: '/react-user',
  //   props: {
  //     username:'pink' //
  //   }
  // },
  // {
  //   name: 'reactSystem',
  //   entry: '//localhost:8090',
  //   container: '#reactSystem',
  //   activeRule: '/react-system',
  // },
  {
    name: 'vue2-system',
    entry: '//localhost:8081',
    container: '#vue2System',
    activeRule: '/vue2-system',
  }
]);
// 启动 qiankun
start();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import './App.css';

function App() {
  return (
    <div className="App">
      {/* 子应用挂载的容器 */}
      <a href="/react-user">react-user</a>|<a href="/react-system">react-system</a>|<a href="/vue2-system">vue2-system</a>
      <div id="reactUser"></div>
      <div id="reactSystem"></div>
      <div id="vue2System"></div>
    </div>
  );
}

export default App;

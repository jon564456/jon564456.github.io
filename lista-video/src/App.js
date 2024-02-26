import logo from './logo.svg';
import './App.css';
import './js/VideoList.js'
import VideoList from './js/VideoList.js';
function App() {
  return (
    <main>
      <Header />
      <VideoList />
    </main>
  );
}


function Header() {
  return (
    <header class="header">
      <div class="header-img">
        <img src={logo} alt="i" />
      </div>
      <h2 class="header-titulo">Lista video</h2>
    </header>
  );
}



export default App;



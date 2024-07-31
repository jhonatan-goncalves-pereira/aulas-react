import logo from './logo.svg';
import './App.css';
import Post from './components/Post';



function App() {
  return (
    <div className="App">
      <h2>Hello, World!</h2>
      <Post pensamento="Saúde" cor="green"></Post>
      <Post pensamento="Prosperidade" cor="gold"></Post>
      <Post pensamento  ></Post>
    </div>
  );
}

export default App;

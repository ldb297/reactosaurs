import './App.css';
import Post from './Post'

function App() {
  const name = 'leo'

  return (
    <div className="App">
      {/* can use variables with curly braces */}
    <p>{name}</p>
    <Post/>
    </div>
  );
}

export default App;

import './App.css';
import Post from './Post'

function App() {
  const name = 'leo'

  return (
    <div className="App">
      {/* can use variables with curly braces */}
    <p>{name}</p>
    <Post title="Comment Thread" author="Yaboi" body="React Comments"/>
    </div>
  );
}

export default App;

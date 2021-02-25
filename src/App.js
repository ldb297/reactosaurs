import './App.css';
import Post from './Post'

function App() {
  const name = 'Shaboi LeoB'

  return (
    <div className="App">
      {/* can use variables with curly braces */}
    <p>{name}</p>
    <Post title="Dope Dinos" author="by: S.L." body="🅱️omments"/>
    </div>
  );
}

export default App;

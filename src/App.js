import logo from './logo.svg';
import './App.css';

function App() {

  const [formState, setFormState] = useState("")

  async function addTodo() {

    const items = await API.get('api91b82af8', '/nft', {
      'queryStringParameters': {
        'tokenId': formState.description
      }
    });
    
  }


  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
        onChange={event => setInput('description', event.target.value)}
        value={formState.description}
        placeholder="Description"
      />
        <button onClick={addTodo}>Create Todo</button>
      </header>
    </div>
  );
}

export default App;

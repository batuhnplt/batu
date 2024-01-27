import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';

function App() {
  const a= 2;
  return (
    <div className="App">
      <header className="App-header">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p>{a+5}</p>
        
      </header>
    </div>
  );
}

export default App;

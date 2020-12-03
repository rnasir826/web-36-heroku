
import './App.css';
import {useState, useEffect} from 'react'

//development
//production

function url(path) {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:5000${path}`
    :''
}

function App() {
  const [data, setData] = useState('')
  useEffect(() => {
    fetch(url('/api/data'))
      .then(res => res.json())
    .then(goods =>setData(goods.data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        {data}
      </header>
    </div>
  );
}

export default App;

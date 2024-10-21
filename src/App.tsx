
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import { Aluno } from './types'
import AlunoComponent from './components/Aluno/AlunoComponent'
import axios from 'axios'

function App() {
  const [count, setCount] = useState<number>(0);

  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get<Aluno[]>('http://localhost:3000/aluno');
      setAlunos(data);
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          pai count is {count}
        </button>
        <button onClick={() => setCount(0)}>zerar pai</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {
          alunos.map((item) => 
            <AlunoComponent 
              setCountFather={setCount} 
              item={item} 
              key={item.id}
            />
          )
        }
      </ul>
    </>
  )
}

export default App

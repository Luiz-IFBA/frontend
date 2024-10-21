import { useEffect, useState } from 'react'
import AlunoComponent from './components/Aluno/AlunoComponent'
import axios from 'axios'
import { Aluno } from './vite-env';

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
        <button onClick={() => setCount((count) => count + 1)}>
          pai count is {count}
        </button>
        <button onClick={() => setCount(0)}>zerar pai</button>
      </div>
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

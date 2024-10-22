import { useEffect, useState } from 'react'
import AlunoComponent from './components/Aluno/AlunoComponent'
import axios from 'axios'
import { Aluno } from './vite-env';
import AlunoForm from './components/AlunoForm/AlunoForm';

function App() {
  const [count, setCount] = useState<number>(0);

  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get<Aluno[]>('http://localhost:3000/aluno');
      setAlunos(data);
      setIsLoading(false);
    } catch(err: unknown) {
      console.log(err);
      setIsLoading(false);
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
          isLoading 
          ? 
            <div>carregando...</div> 
          :
            alunos.map((item) => 
              <AlunoComponent 
                setCountFather={setCount} 
                item={item} 
                key={item.id}
              />
            )
        }
      </ul>

      <AlunoForm/>
    </>
  )
}

export default App

import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import timesInfo from "./timesInfo";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState(timesInfo)

const inicial = [
  {
    id:uuidv4(),
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id:uuidv4(),
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id:uuidv4(),
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id:uuidv4(),
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[0].nome
  },
  {
    id:uuidv4(),
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id:uuidv4(),
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id:uuidv4(),
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id:uuidv4(),
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[1].nome
  },
  {
    id:uuidv4(),
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id:uuidv4(),
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id:uuidv4(),
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id:uuidv4(),
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[2].nome
  },
  {
    id:uuidv4(),
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id:uuidv4(),
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id:uuidv4(),
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id:uuidv4(),
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[3].nome
  },
  {
    id:uuidv4(),
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id:uuidv4(),
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id:uuidv4(),
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id:uuidv4(),
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[4].nome
  },
  {
    id:uuidv4(),
    nome: 'JULIANA AMOASEI',
    cargo: 'Desenvolvedora de software e instrutora',
    imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    time: times[5].nome
  },
  {
    id:uuidv4(),
    nome: 'DANIEL ARTINE',
    cargo: 'Engenheiro de Software na Stone Age',
    imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    time: times[5].nome
  },
  {
    id:uuidv4(),
    nome: 'GUILHERME LIMA',
    cargo: 'Desenvolvedor Python e JavaScript na Alura',
    imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    time: times[5].nome
  },
  {
    id:uuidv4(),
    nome: 'PAULO SILVEIRA',
    cargo: 'Hipster e CEO da Alura',
    imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    time: times[5].nome
  },
]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(id,cor){
    
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([ ...times, {...novoTime,id: uuidv4()}])
  }


  return (
    <div>
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
        cadastrarTime={cadastrarTime}
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time 
        key={indice}
        mudarCor={mudarCorDoTime}
        time={time} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
        aoDeletar={deletarColaborador} 
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;


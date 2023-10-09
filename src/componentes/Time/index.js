import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor ,0.6)  }}>
            <input type='color' 
            value={time.cor} 
            className='input-cor' 
            onChange={event => mudarCor(time.id, event.target.value)}/>
          
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => 
                    <Colaborador 
                    key={indice} 
                    colaborador={colaborador} 
                    corDeFundo={time.cor}  
                    aoDeletar={aoDeletar} />)}
            </div>
        </section>

    )
}

export default Time
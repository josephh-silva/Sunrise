import './index.css'
import Sun from '../../assets/sun-two.png'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Mision() {
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.mision', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.img-model', {
            duration: 2000,
            distance: '10rem',
            origin: 'right',
            delay: 500
        });
        
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    }, [])
    return (
        <section className='container container-m'>
            <div className='mision'>
                <div className='text-p-mission'>
                    <p>
                        Estamos mudando <br />
                        o jeito que você <br />
                        se veste.
                    </p>
                </div>
                <hr />
                <div className='text-bottom'>
                    <div className='img-text-bottom'>
                        <img src={Sun} alt="sun" className='img-sun' />
                    </div>
                    <div className='text-one'>
                        <p>
                            A missão da Sunrise é oferecer roupas que unem estilo, <br />
                            conforto e qualidade, <br />
                            ajudando nossos clientes a expressarem sua autenticidade <br />
                            com confiança. <br />
                            Buscamos transformar cada look em uma verdadeira extensão  <br />
                            da personalidade de quem o veste.
                        </p>
                    </div>
                </div>
            </div>
            <div className='img-model'>
                
            </div>
        </section>
    )
}
export default Mision
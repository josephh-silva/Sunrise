import './index.css'
import ScrollReveal from 'scrollreveal';
import Email from '../../assets/mail.svg'
import ArrowDown from '../../assets/arrow-down.svg'
import { useEffect } from 'react';
function Cards(){
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.card-one', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.text-card', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 1000
        });
        reveall.reveal('.cards-three', {
            duration: 2000,
            distance: '10rem',
            origin: 'right',
            delay: 1500
        });
        reveall.reveal('.cards-three-2', {
            duration: 2000,
            distance: '10rem',
            origin: 'right',
            delay: 2000
        })
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    },[]);
    return(
        <>
            <section className="container ">
                <div className="row container-cards ">
                    <div className="col-6 card-one">
                        <div className=' row email-info'>
                            <div className="col-6 learn-more">
                                <a href="#">Saiba mais</a>
                                <div>
                                    <img src={ArrowDown} alt="Email" />
                                </div>
                            </div>
                            <div className="col-6 button">
                            <a href="http://wa.me/559185927997" target="_blank" rel="noopener noreferrer">Contate-nos</a>
                                <div>
                                    <img src={Email} alt="Email" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 container-two-cards">
                       <div className="container-second-cards">
                            <div className='text-card'>
                                <div>
                                    <h1>
                                        Estilo não é só o <br /> que você veste, <br /> é quem você é.
                                    </h1>
                                </div>
                                <p>
                                    Cada peça que escolhemos para nossa coleção foi pensada <br />
                                    para destacar a sua essência, 
                                    porque acreditamos que a <br />
                                    verdadeira beleza vem de dentro 
                                    e deve ser refletida no que você veste.
                                </p>
                            </div>
                            <div className=" min-cards">
                                <div className="cards-three">
                                    <h2>
                                        #TRENDING2024
                                    </h2>
                                </div>
                                <div className="cards-three-2">
                                    <h2>
                                     #CLOTHES
                                    </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cards
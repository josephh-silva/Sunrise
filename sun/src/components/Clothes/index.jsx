import CardsClothes from './CardsClothes/CardsClothes'
import CardOne from '../../assets/sex-one.jpg'
import CardTwo from '../../assets/img-two.jpg'
import CardThree from '../../assets/img-three.jpg'
import CardFour from '../../assets/img-four.jpg'
import CardFive from '../../assets/img-five.jpg'
import CardSIx from '../../assets/sex-three.jpg'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import './index.css'

function Clothes() {
        useEffect(() => {
            // Inicializa o ScrollReveal dentro do useEffect
            const reveall = ScrollReveal({
                reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
            });

            // Coloca as revelações dentro do useEffect
            reveall.reveal('.cards-clothes', {
                duration: 2000,
                distance: '10rem',
                origin: 'bottom',
                delay: 500
            });
            
            return () => {
                // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
                // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
                // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
            };
        }, [])
        return (
            <>
                <span id='fashion'></span>
                <div className='container-h3' >
                    <h3 className='text-section-clothes'>Sobre as nossas peças</h3>
                    <p className='text-section-clothes-p'>Seu novo favorito, disponível por tempo limitado</p>
                </div>
                <section className="container cards-clothes">
                    <CardsClothes imagem={CardOne} text="Conforto"  />
                    <CardsClothes imagem={CardTwo} text="Estilo"/>
                    <CardsClothes imagem={CardThree} text="Versatilidade" />
                    <CardsClothes imagem={CardFour} text="Sofisticação" />
                    <CardsClothes imagem={CardFive} text="Leveza"/>
                    <CardsClothes imagem={CardSIx} text="Fashion" />
                </section>
            </>
        )
    }
    export default Clothes
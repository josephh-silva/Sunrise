import './index.css'
import ImgText from '../../assets/img-text.jpg'
import Star from '../../assets/star.png'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
function TextMain(){
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.container-text', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
        }, []);
    return(
        <>
        <span id='container-text'></span>
        <div className="container container-text" >
            <h3>
            Na Sunrise, mais do que vender roupas, buscamos ajudar 
            <span>
                <img src={ImgText} alt="Clothes" />
            </span> você a expressar sua identidade por meio do estilo  <br />
            Afinal, a moda é uma forma de arte, e cada um de nós é uma tela em branco, pronto para ser transformado. <br />
            <span className='star-text'> <img src={Star} alt="star" />Se você procura roupas que combinem com a sua essência</span> e que,<br /> ao mesmo tempo, 
            tragam um toque de frescor e originalidade, venha nos visitar. <br />
             A Sunrise está pronta para iluminar seu estilo!
            </h3>
        </div>
        </>
    )
}
export default TextMain
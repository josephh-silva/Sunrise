import './cards.css'
function CardsClothes({imagem,text}){
    return(
        <>
        <div className="clothes">
            <div className="img-card ">
                <img src={imagem} alt="clothes-img" className="clothes-img" />
            </div>
            <div>
                <p className='text'>{text}</p>
            </div>
        </div>
        </>
    )
}
export default CardsClothes
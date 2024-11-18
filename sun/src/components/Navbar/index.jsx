import './index.css'
import Sun from '../../assets/sun.jpg'
import Ig from '../../assets/ig.svg'
function Navbar(){
    return(
        <>
        <div className="container-fluid inform">
          Lorem ipsum dolor sit, amet consectetur adipisici
        </div>
      
        <nav className="container">
          <div className="row container-fluid container-nav">
            <div className="col-5 logo-conf">
              <img src={Sun} alt="logo" className="logo" />
              <div>
                <span>Sunrise</span>
              </div>
            </div>
      
            <div className="col-3 links">
              <a href="#container-text" className="link">Sobre</a>
              <span>.</span>
              <a href="#fashion" className="link">Estilo</a>
            </div>
      
            <div className="col-4 ig-logo">
              <a 
                onClick={() => window.location.href = 'https://www.instagram.com/sunrise.use?igsh=NWo5M3ZnZzZ4ZWdjs'} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={Ig} alt="Instagram" />
              </a>
            </div>
          </div>
        </nav>
      </>
      
    )
}
export default Navbar
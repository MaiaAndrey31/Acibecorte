import './style.css'
import ImgWhats from '../../assets/icon-withe-whatsapp.svg'

function BtnWhatsPulse() {
    return (
    
      <a href="https://wa.me/551145441075" target="_blank">
        <div class="pulse">
          <img  src={ImgWhats} alt="" />
        </div>
      </a>
    )
}
export default BtnWhatsPulse
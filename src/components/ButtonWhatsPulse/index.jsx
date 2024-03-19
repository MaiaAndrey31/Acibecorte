import * as C from './style'
import ImgWhats from '../../assets/icon-withe-whatsapp.svg'

function BtnWhatsPulse() {
    return (
    <C.LinkWhats>
        <C.BtnWhats className="pulse">
            <img src={ImgWhats} />
        </C.BtnWhats>
    </C.LinkWhats>
    )
}
export default BtnWhatsPulse
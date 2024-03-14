import * as C from './style'
import VideoBG from '../../assets/acibecorte.mp4'
function Company() {
  return (
    <C.Container>
  
      <div class="background">
            <video loop autoplay muted class="conteudo-background ">
                <source src="../../assets/acibecorte.mp4"/>
            </video>
             
            <div class="mascara-video"></div>
        </div>

        <h1>Empresa</h1>
        <p>
          A Acibecorte é uma empresa sólida e conceituada especialista no
          serviço de oxicorte que atua no mercado desde 2004. A Acibecorte
          proporciona aos seus Clientes a redução de custos, otimização do tempo
          nos processos de fabricação de produtos e serviços.
        </p>
  
    </C.Container>
  )
}

export default Company

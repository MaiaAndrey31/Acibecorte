import * as C from './style'
import VideoBG from '../../assets/acibecorte.mp4'
import ButtonWhats from '../../components/ButtonWhats'
function Company() {
  return (
    <C.Container>
      <div className="background">
        <video
          loop={true}
          autoPlay={true}
          muted={true}
          className="conteudo-background "
        >
          <source src={VideoBG} />
        </video>

        <div className="mascara-video"></div>
      </div>
      <div className="content">
        <h1>A Empresa</h1>
        <p>
          A Acibecorte é uma empresa sólida e conceituada especialista no
          serviço de oxicorte e Plasma CNC que atua no mercado desde 2004.
          Proporcionando aos seus Clientes a redução de custos, otimização do
          tempo nos processos de fabricação de produtos e serviços, garantindo
          sempre a melhor qualidade.
        </p>
        <div>
          <ButtonWhats />
        </div>
      </div>
    </C.Container>
  )
}

export default Company

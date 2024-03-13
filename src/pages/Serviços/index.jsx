import * as C from './style'
import PlasmaCorte from '../../assets/corte-plasma.jpg'

function Services() {
  return (
    <C.Container>
      <h1>Serviços</h1>

      <C.PartOne>
        <p>
          O serviço de Oxicorte da Acibecorte é realizado em Equipamento como o
          Pantógrafo (fotocélula) ou com maçaricos acoplados a um carrinho
          (Tartaruga) que realiza seu percurso sobre um trilho alinhado com o
          corte da peça com precisão milimétrica.
        </p>
        <p>
          A Acibecorte garante o melhor processo de corte com rapidez na entrega
          dos produtos. Nossa estrutura atende desde pequenos projetos até corte
          de peças de grandes dimensões, sempre com a máxima qualidade e
          confiabilidade.
        </p>
      </C.PartOne>

      <C.PartTwo>
        <div>
        <p>
          Oferecemos serviços especializados de corte em chapas, abrangendo uma
          ampla variedade de espessuras. Com uma equipe altamente qualificada e
          uma infraestrutura completa, estamos prontos para atender desde
          projetos pequenos até o corte de peças de grandes dimensões,
          garantindo sempre a mais alta qualidade e confiabilidade. Localizada
          estrategicamente na cidade de Suzano na Grande SP, com fácil acesso a Rodovia Índio
          Tibiriçá, a Acibecorte se destaca como a escolha ideal para suas
          necessidades de corte em chapas.
        </p>
        </div>
        <C.ListBox>
        
          <h6><span>➟</span> Corte Plasma CNC</h6>
          <h6><span>➟</span> Oxicorte</h6>
          <h6><span>➟</span> Dobra</h6>
          <h6><span>➟</span> Caldeiraria Leve</h6>
          <h6><span>➟</span> Projetos Especiais</h6>
        
        </C.ListBox>
        <C.ImageService>

        <img src={PlasmaCorte} />
        </C.ImageService>
        
      </C.PartTwo>
    </C.Container>
  )
}

export default Services

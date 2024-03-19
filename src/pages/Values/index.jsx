import { Container, LeftSide, LeftBox, RightSide, RightBox } from './style'
import { BsBookmarkCheckFill } from "react-icons/bs";


function ValuesPage() {
  return (
    <Container>
      <LeftSide>
        <LeftBox>
    
        <div className="titleIcons">
          <BsBookmarkCheckFill className='icon'/>
            <h1>MISSÃO</h1>
        </div>
          <p>
            A missão da Acibecorte é fornecer serviços de Oxicorte com
            excelência, buscando sempre a plena satisfação de nossos clientes
            por meio da qualidade impecável, confiabilidade inabalável e entrega
            ágil e pontual.
          </p>
        </LeftBox>
        <LeftBox>
        <div className="titleIcons">
          <BsBookmarkCheckFill className='icon'/>
            <h1>VISÃO</h1>
        </div>
          <p>
            Nossa meta na Acibecorte é estabelecer o padrão de excelência como a
            principal referência no serviço de Oxicorte em São Paulo.
            Comprometemo-nos a superar continuamente os mais altos padrões de
            qualidade e excelência em atendimento, consolidando nossa posição
            como a melhor escolha para nossos clientes.
          </p>
        </LeftBox>
      </LeftSide>
      <RightSide>
        <RightBox>
        <div className="titleIcons">
          <BsBookmarkCheckFill className='icon'/>
            <h1>VALORES</h1>
        </div>
          <p>
            Na Acibecorte, nossa filosofia é baseada em valores sólidos e
            práticas transparentes que fortalecem nossos laços com clientes,
            fornecedores, parceiros, concorrentes e colaboradores. Investimos em
            inovação tecnológica para oferecer soluções personalizadas que
            atendam às necessidades específicas de nossos clientes. Nossa
            abordagem eficiente garante o cumprimento dos prazos estabelecidos,
            enquanto nosso comprometimento e empenho asseguram a excelência na
            execução dos serviços prestados. Valorizamos profundamente nossos
            recursos humanos, buscando cultivar a dedicação e o entusiasmo de
            nossa equipe. Juntos, estamos comprometidos em alcançar o mais alto
            nível de qualidade e satisfação em cada projeto que empreendemos.
          </p>
        </RightBox>
      </RightSide>
    </Container>
  )
}

export default ValuesPage

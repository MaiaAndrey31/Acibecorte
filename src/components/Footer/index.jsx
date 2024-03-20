import * as C from './style'

function Footer() {
  return (
    <C.Container>
      <div className="contentFooter">
        <C.Sobre>
          <h1>SOBRE</h1>
          <p>
            A Acibecorte é uma empresa sólida e conceituada especialista no
            serviço de oxicorte que atua no mercado desde 2004. A Acibecorte
            proporciona aos seus Clientes a redução de custos, otimização do
            tempo nos processos de fabricação de produtos e serviços.
          </p>
        </C.Sobre>
        <C.Servicos>
          <h1>Serviços</h1>
          <p>Corte Plasma CNC</p>
          <p>Oxicorte</p>
          <p>Dobra</p>
          <p>Caldeiraria Leve</p>
          <p>Projetos Especiais</p>
        </C.Servicos>
        <C.Social>
          <h1>Contatos</h1>
          <div>
            <p>Instagram</p>
          </div>
          <div>
            <p>Facebook</p>
          </div>
          <div>
            <p>WhatsApp</p>
          </div>
          <div>
            <p>E-mail</p>
          </div>
        </C.Social>
        <C.Endereco>
          <div className="endereco">
            <h1>ENDEREÇO</h1>
            <p>
              Rua Virgílio Gonçalves Capella, 502
              <br />
              Cháraca Estância Paulista
              <br />
              CEP 08653-025 - Suzano - SP
            </p>
          </div>
          <div className="maps">
            <iframe
              id="map-canvas"
              className="map_part"
              width="100%"
              height="100%"
              frameBorder="0"
              
              
              src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Rua Virgílio Gonçalves Capella, 502 - Cháraca Estância Paulista - CEP 08653-025 - Suzano - SP&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              Powered by{' '}
              <a href="https://www.googlemapsgenerator.com">
                html embed google maps
              </a>{' '}
              and <a href="https://yatzyregler.com/da/">yatzy blok</a>
            </iframe>
          </div>
        </C.Endereco>
      </div>

      <C.Copy>
        <p>
          © Acibecorte - Todos os direitos reservados | Desenvolvido por{' '}
          <strong>TriadCode</strong>
        </p>
      </C.Copy>
    </C.Container>
  )
}

export default Footer

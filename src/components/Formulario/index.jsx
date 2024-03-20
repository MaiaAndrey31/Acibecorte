import './style.css'

function Forms() {
  return(
<form
    className="fale-conosco"
    action="https://formsubmit.co/wanderson.rodrigues.central@gmail.com"
    method="POST"
  >
    <div className="row50">
        <div className="input-form">
          <label for="input-name">Nome:</label>
          <input className='input-height' id="input-name" type="text" name="nome" />
        </div>
        <div className="input-form">
          <label for="input-empresa">Empresa</label>
          <input className='input-height' id="input-empresa" type="text" name="empresa" />
        </div>
    </div>
    <div className="row50">
        <div className="input-form">
          <label for="input-tel">Telefone:</label>
          <input className='input-height' id="input-tel" type="tel" name="telefone" />
        </div>
        <div className="input-form">
          <label for="input-cargo">Cargo:</label>
          <input className='input-height' id="input-cargo" type="text" name="cargo" />
        </div>
    </div>
    <div className="input-form">
          <label for="input-email">E-mail:</label>
          <input className='input-height' id="input-email" type="email" name="email" />
        </div>
    <div className="input-form">
      <label for="input-info ">Mensagem:</label>
      <textarea className='input-info'id="input-info" name="mensagem"></textarea>
    </div>
    <button className="btn-submit" id="send" type="submit">
      Enviar Formulário
    </button>
  </form>
  )
}

export default Forms


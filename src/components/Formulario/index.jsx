import './style.css'

function Forms() {
  return(
<form
    class="fale-conosco"
    action="https://formsubmit.co/wanderson.rodrigues.central@gmail.com"
    method="POST"
  >
    <div class="row50">
        <div class="input-form">
          <label for="input-name">Nome:</label>
          <input class='input-height' id="input-name" type="text" name="nome" />
        </div>
        <div class="input-form">
          <label for="input-empresa">Empresa</label>
          <input class='input-height' id="input-empresa" type="text" name="empresa" />
        </div>
    </div>
    <div className="row50">
        <div class="input-form">
          <label for="input-tel">Telefone:</label>
          <input class='input-height' id="input-tel" type="tel" name="telefone" />
        </div>
        <div class="input-form">
          <label for="input-cargo">Cargo:</label>
          <input class='input-height' id="input-cargo" type="text" name="cargo" />
        </div>
    </div>
    <div class="input-form">
          <label for="input-email">E-mail:</label>
          <input class='input-height' id="input-email" type="email" name="email" />
        </div>
    <div class="input-form">
      <label for="input-info ">Mensagem:</label>
      <textarea id="input-info" name="mensagem"></textarea>
    </div>
    <button class="btn-submit" id="send" type="submit">
      Enviar Formulário
    </button>
  </form>
  )
}

export default Forms


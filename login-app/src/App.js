import logo from './logo.svg';
import './App.css';
function TituloLogin() {
  return (
    <h3 id='titulo'>INICIAR SESIÓN</h3>
  );
}
function Formulario() {
  return (
    <form>
      <div class="grupo-componentes">
        <label for='user'><i class="fa-solid fa-user"></i></label>
        <input type='text' id='user' placeholder='Usuario'></input>
      </div>
      <div class="grupo-componentes">
        <label for='user'><i class="fa-solid fa-lock"></i></label>
        <input type='password' id='user' placeholder='Contraseña'></input>
      </div>
      <button type='submit' class="btn btn-blue">INGRESAR</button>
    </form>

  );
}
function ContenedorLogin() {
  return (
    <div id='formulario'>
      <div id="formulario-contenido">
        <TituloLogin />
        <Formulario />
      </div>
      <div>
        <Imagen />
      </div>
    </div>
  );
}
function Imagen() {
  return (
    <div class="formulario-imagen">
      <img src={logo} alt='' width="300px"/>
    </div>)
}

export default ContenedorLogin;

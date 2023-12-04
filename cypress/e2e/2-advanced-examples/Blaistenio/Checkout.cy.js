import UsuarioCarlos, {  } from "../../Page/UsuarioCarlos";

const Inicio = new UsuarioCarlos

describe('Navegar', () => {
    Inicio.IniciarSesion()
    
});

it('Entrar al Perfil con correo', () => {
    Inicio.EntrarAperfil()
});
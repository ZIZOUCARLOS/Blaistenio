class UsuarioCarlos {
    
Navegar(){
    cy.visit('https://blaistenio.myvtex.com/');
}
IniciarSesion(){
return cy.get ("body > div.render-container.render-route-store-home > div > div.vtex-store__template.bg-base > div > div.vtex-sticky-layout-0-x-wrapper.vtex-sticky-layout-0-x-wrapper--sticky-header > div > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--mid-row-header-ds > section > div > div:nth-child(5) > div > div > button")

}
IngresarMail(){
    return cy.get("body > div.vtex-login-2-x-portalContainer.vtex-login-2-x-portalContainer--header-login > div > div > div > div > div > div.vtex-login-2-x-contentContainer.shadow-3.mt3 > div > div > div > div.vtex-login-2-x-options > ul > li:nth-child(2) > div > button > div")
}
BotonIngresar(){
    return cy.get("body > div.vtex-login-2-x-portalContainer.vtex-login-2-x-portalContainer--header-login > div > div > div > div > div > div.vtex-login-2-x-contentContainer.shadow-3.mt3 > div > div > div > div > form > div.vtex-login-2-x-formFooter.bt.b--muted-4.pt4.flex.mt3 > div.vtex-login-2-x-sendButton.ml-auto > button > div")
}
// METODS*********************
EntrarAperfil(){
    this.Navegar()
    this.IniciarSesion().click()
    this.IngresarMail().click()
    this.BotonIngresar().click()
}

}

export default UsuarioCarlos

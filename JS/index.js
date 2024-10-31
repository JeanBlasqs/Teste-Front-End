function verificarVisibilidade(){
    const elementos = document.querySelectorAll('.entradaesquerda, .entradadireita, .entradabaixo');
    const alturaJanela = window.innerHeight;
    const alturaGatilho = alturaJanela * (60/100); //Percentual da tela
    
    for (let i = 0; i < elementos.length; i++){
        const objeto = elementos[i].getBoundingClientRect();
        if (objeto.top <= alturaGatilho){
            elementos[i].classList.add('exibir');
        } else if (objeto.top > alturaGatilho) {
            elementos[i].classList.remove('exibir');
        }
    }
}
    window.addEventListener('scroll', verificarVisibilidade);
    window.addEventListener('load', verificarVisibilidade);


    class MobileNavbar {
        constructor(mobileMenu, navList, navLinks) {
          this.mobileMenu = document.querySelector(mobileMenu);
          this.navList = document.querySelector(navList);
          this.navLinks = document.querySelectorAll(navLinks);
          this.activeClass = "active";
      
          this.handleClick = this.handleClick.bind(this);
        }
      
        animateLinks() {
          this.navLinks.forEach((link, index) => {
            link.style.animation
              ? (link.style.animation = "")
              : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                  index / 7 + 0.3
                }s`);
          });
        }
      
        handleClick() {
          this.navList.classList.toggle(this.activeClass);
          this.mobileMenu.classList.toggle(this.activeClass);
          this.animateLinks();
        }
      
        addClickEvent() {
          this.mobileMenu.addEventListener("click", this.handleClick);
        }
      
        init() {
          if (this.mobileMenu) {
            this.addClickEvent();
          }
          return this;
        }
      }
      
      const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
      );
      mobileNavbar.init();
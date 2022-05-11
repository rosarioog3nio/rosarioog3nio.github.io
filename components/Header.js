class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header is-100" id="header">
        <a href="./index.html" class="header-logo box-bordered top">
          RS
        </a>

        <nav class="nav-container">
          <ul class="menu">
            <li class="menu-item"><a href="./index.html">home</a></li>
            <li class="menu-item"><a href="./about-me.html">about me</a></li>
            <li class="menu-item"><a href="./portfolio.html">portfolio</a></li>
            <li class="menu-item"><a href="https://rosarioogenio.medium.com">blog</a></li>
            <li class="menu-item"><a href="./Rosario_resume.pdf">Resume</a></li>
          </ul>
        </nav>

        <address class="contacts">
          <a class="contact-item" title="Github" target="_blank" href="https://github.com/rosarioog3nio">
            <i class='bx bxl-github'></i>
          </a>
          <a class="contact-item" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/rosario-fondo/">
            <i class='bx bxl-linkedin-square' ></i>
          </a>
          <a class="contact-item" title="Twitter" target="_blank"  href="https://twitter.com/Rosario0g3nio">
            <i class='bx bxl-twitter' ></i>
          </a>   
    
        </address>
      </header>
    `;
  }
}

customElements.define('main-header', Header);



class tsňaba{
    static binary(str){
        let binary = '';
        for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          binary += char.toString(2).padStart(8, '0');
        }
        return binary;
    }
}
class tsňabalint{
    static Tutorial(){
        console.info("You have to yet installed Node.js.")
        console.log("Next, add ESLint to your app with Node Package Manager: npm init @eslint/config")
        console.log("Now, the element <LintCode> is already claimed for you.")
    }
}
class LintCode extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const lang = this.getAttribute('lang') || 'languague';
      if (lang==="js" || lang==="javascript"){
        const errorContainer = document.getElementById('error-container');
        errorContainer.innerHTML = '';
      
        errors.forEach(error => {
          const errorElement = document.createElement('div');
          errorElement.className = 'error';
          errorElement.textContent = `${error.line}:${error.column} - ${error.message}`;
          errorContainer.appendChild(errorElement);
        });
      }
    }
  }
  
  customElements.define('LintCode', LintCode);
  

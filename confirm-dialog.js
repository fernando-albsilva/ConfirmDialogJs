class ConfirmDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Criando a estrutura do diálogo
    this.shadowRoot.innerHTML = `
        <style>
          .dialog-overlay {
            z-index:1;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          .dialog-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            min-width: 300px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }
          .dialog-open {
            visibility: visible;
            opacity: 1;
          }
          .close-btn {
            background: red;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
          }
        </style>
        <div class="dialog-overlay">
          <div class="dialog-content">
            <slot></slot>
            <button class="close-btn">Fechar</button>
          </div>
        </div>
      `;

    this.overlay = this.shadowRoot.querySelector(".dialog-overlay");
    this.closeButton = this.shadowRoot.querySelector(".close-btn");

    this.closeButton.addEventListener("click", () => this.close());
  }

  open() {
    this.overlay.classList.add("dialog-open");
  }

  close() {
    this.overlay.classList.remove("dialog-open");
  }
}

customElements.define("confirm-dialog", ConfirmDialog);

const template = document.createElement("template");
template.innerHTML = `
  <style>
    span, button {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  </style>
  <div x-data="$el.parentElement.data()">
    <button @click="dec()">-</button>
    <span x-text="count"></span>
    <button @click="inc()">+</button>
  </div>
`;

export class MyCounter extends HTMLElement {
  connectedCallback() {
    this.append(template.content.cloneNode(true));
  }

  data() {
    return {
      count: 0,
      inc() {
        this.count++;
      },
      dec() {
        this.count--;
      },
    };
  }
}

customElements.define("my-counter", MyCounter);

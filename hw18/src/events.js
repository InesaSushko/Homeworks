class BoxResize {
  constructor() {
    this.section = document.querySelector("section");
    this.addedWidth = 0;
  }

  defineBoxes(elem) {
    let allBoxes = [...this.section.children];
    this.shrinkBox = elem.parentElement;
    this.expandBox = allBoxes[1];
    this.constBox = allBoxes[0];
    if (this.shrinkBox === allBoxes[0]) {
      this.constBox = allBoxes[2];
    }
    if (this.shrinkBox === allBoxes[1]) {
      this.expandBox = allBoxes[2];
    }
    this.constBoxWidth = this.constBox.clientWidth;
  }

  changeStyles() {
    this.constBox.style.flex = "none";
    this.constBox.style.flexBasis = this.constBoxWidth + `px`;
    this.shrinkBox.style.flex = `1 0`;
    this.expandBox.style.transition = `all 1s`;
    if (this.addedWidth > 0) {
      while (this.addedWidth > 1) {
        this.expandBox.style.flex = `1 0 ${this.addedWidth--}px`;
      }
      this.addedWidth = 0;
    } else {
      while (this.addedWidth < this.shrinkBox.clientWidth * 2 - 50) {
        this.expandBox.style.flex = `1 0 ${this.addedWidth++}px`;
      }
    }
  }

  resize() {
    this.section.addEventListener("click", event => {
      if (event.target.className == "resize") {
        this.defineBoxes(event.target);
        this.changeStyles();
      }
    });
  }
}

var movingBoxes = new BoxResize();
console.log(movingBoxes.resize());

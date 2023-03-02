export default class Cell {
  constructor(value) {
    this.value = value;
    this.isGuessed = false;
  }

  setGuessed() {
    this.isGuessed = true;
  }
}
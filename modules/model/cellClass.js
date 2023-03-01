export default class Cell {
  constructor(value) {
    this.value = value;
    this.isBeingChecked = false;
    this.isGuessed = false;
  }

  check() {
    this.isBeingChecked = true;
  }

  stopChecking() {
    this.isBeingChecked = false;
  }

  guess() {
    this.isGuessed = true;
  }
}
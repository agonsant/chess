/*
this class will draw the board on the screen and all the pieces on the board 
*/
export class DrawEngine {
  constructor(containerID) {
    this.containerID = containerID;
  }
  draw(board) {
    const container = document.getElementById(this.containerID);
    const boardArray = board.getBoard();
    for (let i = 0; i < boardArray.length; i++) {
      const row = this.generateRow();
      for (let j = 0; j < boardArray[i].length; j++) {
        if (this.isWhiteCell(i, j)) {
          row.appendChild(this.generateWhiteCell());
        } else {
          row.appendChild(this.generateBlackCell());
        }
      }
      container.appendChild(row);
    }
  }
  clear() {}

  isWhiteCell(i, j) {
    return i % 2 === j % 2;
  }

  generateWhiteCell() {
    return this.generateCell("white");
  }

  generateBlackCell() {
    return this.generateCell("brown");
  }

  generateCell(color) {
    const cell = document.createElement("div");
    cell.style.width = "20px";
    cell.style.height = "20px";
    cell.style.backgroundColor = color;
    cell.style.border = "1px solid black";
    return cell;
  }
  generateRow() {
    const row = document.createElement("div");
    row.style.display = "flex";
    return row;
  }
}

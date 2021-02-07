import  { PiecesImages } from './chess-pieces-images.js';
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
          row.appendChild(this.generateWhiteCell(boardArray[i][j]));
        } else {
          row.appendChild(this.generateBlackCell(boardArray[i][j]));
        }
      }
      container.appendChild(row);
    }
  }
  clear() {}

  isWhiteCell(i, j) {
    return i % 2 === j % 2;
  }

  generateWhiteCell(piece) {
    return this.generateCell("white", piece);
  }

  generateBlackCell(piece) {
    return this.generateCell("brown", piece);
  }

  generateCell(color, piece) {
    const cell = document.createElement("div");
    cell.style.width = "20px";
    cell.style.height = "20px";
    cell.style.backgroundColor = color;
    cell.style.border = "1px solid black";
    if (piece) cell.appendChild(this.generatePiece(piece));
    return cell;
  }
  generateRow() {
    const row = document.createElement("div");
    row.style.display = "flex";
    return row;
  }

  /**
   * Generate the piece representation in the UI
   * @param {Piece} piece the piece to be drawn
   * @returns {HTMLImageElement} the image for our piece
   */
  generatePiece(piece) {
    const pieceImg = document.createElement("img");
    pieceImg.src = piece.isPieceDark() ? PiecesImages[piece.getType()].dark : PiecesImages[piece.getType()].light
    pieceImg.width = "20";
    pieceImg.height = "20";
    return pieceImg;
  }
}

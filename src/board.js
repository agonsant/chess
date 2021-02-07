import { Knight, Bishop, Tower } from "./pieces";
/**
 * this class manage everything around the board and storage the pieces
 */
export class Board {

  constructor() {
    this.pieces = [
      [new Tower(true), new Knight(true),new Bishop(true), null, null, new Bishop(true), new Knight(true), new Tower(true)],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [new Tower(false), new Knight(false),new Bishop(false), null, null,new Bishop(false), new Knight(false), new Tower(false)],
    ];
  }

  getBoard(){
      return this.pieces;
  }
}

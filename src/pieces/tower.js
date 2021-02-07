import {Piece} from "./Piece.js";
//everithing related to tower piece
export class Tower extends Piece {
  constructor(isDark) {
    super(isDark, "tower");
  }

  /**
   * A Tower can moves in horizontal shape or vertical shape
   */
  isValidMove(currentPosition, targetPosition) {
    return (
      (Math.abs(currentPosition.getX() - targetPosition.getX()) != 0 &&
        currentPosition.getY() === targetPosition.getY()) ||
      (Math.abs(currentPosition.getY() - targetPosition.getY()) != 0 &&
        currentPosition.getX() === targetPosition.getX())
    );
  }
}

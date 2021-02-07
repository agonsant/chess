import {Piece} from "./Piece.js";

/**
 * Represents a Knight as a chess piece. It manage the movement of the piece
 */
export class Knight extends Piece{

    constructor(isDark){
        super(isDark,'knight');
    }

    /**
     * A Knight can moves in L shape
     */
    isValidMove(currentPosition, targetPosition){
        return this.isRightDifference(currentPosition,targetPosition,2,1) || this.isRightDifference(currentPosition,targetPosition,1,2);
    }

    isRightDifference(currentPosition, targetPosition, diffX, diffY){
        return Math.abs(currentPosition.getX() - targetPosition.getX()) === diffX && 
               Math.abs(currentPosition.getY() - targetPosition.getY()) === diffY
    }
}
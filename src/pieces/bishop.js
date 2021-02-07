import {Piece} from "./Piece.js";
//everithing related to  piece
export class Bishop extends Piece{

    constructor(isDark){
        super(isDark,'bishop');
    }

    /**
     * A bishop can moves in diagonal shape
     */
    isValidMove(currentPosition, targetPosition){
        return Math.abs(currentPosition.getX() - targetPosition.getX()) === Math.abs(currentPosition.getY() - targetPosition.getY());
    }

}
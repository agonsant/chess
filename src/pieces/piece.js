
/**
 * Represents a Piece in an abstract way. It shoul be the base clase for the whole pieces in our board.
 * It has the responsability of:
 * - know the kind of color it is
 * - compare two pieces
 * - expose the kind of piece
 */
 export class Piece{

    constructor(isDark, type){
        this.isDark = isDark;
        this.type = type;
    };

    /**
     * Returns if a peace has a dark color
     * @returns {boolean} true if the piece is dark. false e.o.c
     */
    isPieceDark(){
        return this.isDark;
    };

    /**
     * Compares two pieces returning true if both pieces are dark or both pieces are light
     * @param {Piece} piece The piece to be compared
     * @returns {boolean} true if the pieces has the same color, false e.o.c
     */
    hasSameColor(piece){
        return this.isPieceDark() === piece.isPieceDark();
    }

    /**
     * Returns the kind of piece the instance is
     * @returns {string} the kind of piece
     */
    getType(){
        return this.type;
    }

    /**
     * Given a current position and a target position, the method indicates if it is a valid movement for the current piece
     * @param {Position} currentPosition the current piece board position
     * @param {Position} targetPosition the board position that the user wants to move the piece
     * @returns {boolean} true if it is a valid movement for the current piece, false o.e.c 
     */
    isValidMove(currentPosition, targetPosition){};

}
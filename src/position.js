

/**
 * Represents a position in a board. It has the column and row as a coordinates
 */
export class Position {

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    /**
     * @returns {number} the row position
     */
    getX(){
        return this.x;
    }

    /**
     * @returns {number} the column position
     */
    getY(){
        return this.y;
    }

    /**
     * Compares two positions and returns true if they are equals, that means both has the same x and same y
     * @param {Position} position the position to be compared
     * @returns {boolean} true if both position are equals
     */
    isEquals(position){
        return this.x === position.getX() && this.y === position.getY();
    }
}
import { DrawEngine } from "./draw-engine.js";
import {Board} from "./board.js";
const drawEngine= new DrawEngine('board');
const board= new Board();
drawEngine.draw(board);
import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

export default function minesweeper (matrix) {
  let array = []
  matrix.forEach(arr =>{
    array.push([])
  })
  for(let i = 0; i <=  matrix.length; i++) {
    for(let j =0; j<= matrix[i].length; i++) {
      let numberOfMines = (matrix[i][j - 1] ? Number(matrix[i][j - 1]) : 0) + (matrix[i][j + 1 ] ? Number(matrix[i][j + 1]) : 0) 
      + (matrix[i - 1][j - 1] ? Number(matrix[i - 1][j - 1]) : 0) + (matrix[i - 1][j] ? Number(matrix[i - 1][j]) : 0) + (matrix[i - 1][j + 1] ? Number(matrix[i - 1][j + 1]) : 0)
      + (matrix[i + 1][j - 1] ? Number(matrix[i + 1][j - 1]) : 0) + (matrix[i + 1][j] ? Number(matrix[i + 1][j]) : 0) + (matrix[i + 1][j + 1] ? Number(matrix[i + 1][j + 1]) : 0)
      array[i].push(numberOfMines)
    }
  }
  return array
}

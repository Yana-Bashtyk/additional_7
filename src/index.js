module.exports = function solveSudoku(matrix) {
  
   for (let row=0; row<9; row++){   //check every cell if its empty
    for (let col=0; col<9; col++){
      if (matrix[row][col] === 0){
        
        for (let num=1; num<=9; num++){   //check possible numbers, if no duplicate in row/column/box - insert it
          if (!was_in_row(matrix,row,col, num) && !was_in_col(matrix,row,col, num) && !was_in_box(row, col, num)){
              matrix[row][col] = num;
            if (solveSudoku(matrix)) return matrix;
            
            else matrix[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;

  function was_in_row (matrix, row, col, num){  //check if number was in a row
    for (let colCheck=0; colCheck<9; colCheck++){
      if (colCheck != col && matrix[row][colCheck] == num) return true;
        
    }
    return false;
  }

  function was_in_col (matrix, row, col, num){  //check if number was in column
    for (let rowCheck=0; rowCheck<9; rowCheck++){
      if (rowCheck != row && matrix[rowCheck][col] == num) return true;
         
    }
    return false;
  }


  function was_in_box (row, col, num) {  //check if number was in a box 3x3
    let start_row = Math.floor(row/3)*3;
    let start_col = Math.floor(col/3)*3;
    for (let rowCheck=0; rowCheck<3; rowCheck++){
      for (let colCheck=0; colCheck<3; colCheck++){
        if (rowCheck != row && colCheck != col && matrix[rowCheck+start_row][colCheck+start_col] == num) return true;
              
      }
    }
    return false;
  }
 
}
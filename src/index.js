/*
 * This is the main entry point for the program. It will parse the input for you.
 * You don't need to change this.
 */
function main() {
  const input = process.argv.slice(2);
  if (input.length === 0) {
    throw new Error("no command line arguments passed");
  }
  const output = handle(input[0]);
  console.log(output);
}

/*
 * Use this method to write your solution.
 * Make sure to print out the solution.
 */
function handle(input) {
  // Split input to create a 2D grid array
  const rows = input.split(/\s*\|\s*/);
  const grid = rows.map((row) => row.split(",").map(Number));

  // Implement your logic here and return the final output
  return []; // Placeholder return value
}

main();

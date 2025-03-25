const handle = require('./solution');

/*
 * This is the main entry point for the program. It will parse the input for you.
 * You don't need to change this.
 */
function main() {
  const input = process.argv.slice(2);
  if (input.length === 0) {
    throw new Error("no command line arguments passed");
  }
   // Split input to create a 2D grid array
  const rows = input[0].split(/\s*\|\s*/);
  const grid = rows.map((row) => row.split(",").map(Number));

  const output = handle(grid);
  console.log(JSON.stringify(output));
}

main();

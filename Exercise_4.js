//benyamin gertes 48/6
const fs = require("fs"); // Import the File System module

function copyLines() {
  // List of input file names to process
  const inputFiles = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file4.txt",
    "file5.txt",
    "file6.txt",
    "file7.txt",
    "file8.txt",
    "file9.txt",
    "file10.txt",
  ];

  const outputFile = "output.txt"; // Name of the output file

  // Read the content of each file and split into lines
  const fileContents = inputFiles.map((file) => {
    try {
      // Read file content and split it into an array of lines
      return fs.readFileSync(file, "utf-8").split("\n");
    } catch {
      // Return an empty array if the file doesn't exist or can't be read
      return [];
    }
  });

  let outputContent = ""; // Accumulate the final output content
  let hasMoreLines = true; // Track whether there are still lines left to process

  // Process the files in a round-robin manner
  while (hasMoreLines) {
    hasMoreLines = false; // Reset flag at the start of each round

    fileContents.forEach((lines, i) => {
      // Extract the required number of lines (1 for file1, 2 for file2, etc.)
      const toCopy = lines.splice(0, i + 1);

      if (toCopy.length) {
        // Add the retrieved lines to the output content
        outputContent += toCopy.join("\n") + "\n";
        hasMoreLines = true; // Continue processing if lines were added
      }
    });
  }

  // Write the accumulated output to the output file
  fs.writeFileSync(outputFile, outputContent, "utf-8");
}

// Execute the function to process files and generate the output
copyLines();

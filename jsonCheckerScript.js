function validatePepePunks(pepeArray) {
  const colorRegex = /^[A-Za-z\s]+$/;
  const numberRegex = /^\d+$/;
  const idPattern = /^[a-fA-F0-9]{64}i0$/;

  for (const pepe of pepeArray) {
    const failedTests = [];

    if (!idPattern.test(pepe.id)) {
      failedTests.push("ID format");
    }
    if (!/^Pepe Punk #\d+$/.test(pepe.meta.name)) {
      failedTests.push("Name format (should be 'Pepe Punk #X')");
    }

    // Add similar checks for other attributes...

    if (failedTests.length === 0) {
      console.log(`${pepe.meta.name} is valid.`);
    } else {
      console.log(`${pepe.meta.name} failed tests: ${failedTests.join(", ")}`);
    }
  }
}

// Example usage
const pepeData = [
  //array here
];

validatePepePunks(pepeData);

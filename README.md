# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is used to increment a numerical field by a given value.  However, if you provide a non-numeric value as the increment, MongoDB will throw an error.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## How to reproduce the error
1.  Make sure you have a MongoDB instance running.
2.  Create a collection (e.g., `myCollection`) with a document containing a numerical field (e.g., `counter`).
3.  Run `bug.js`.  You'll see an error.

## Solution
The `bugSolution.js` demonstrates how to correctly use `$inc`, ensuring the increment value is a number.
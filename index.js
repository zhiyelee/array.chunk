/**
  * Array Chunk: Split array/TypedArray to chunks of given size.
  **/

module.exports = (array = [], chunk = 1) => {
  /* must be an array */
  if (!Array.isArray(array)) {
    throw new Error("Array Chunk: requires 'array' argument to be of an array type");
  }
  /* should not be NaN and must be an integer only */
  else if (Number.isNaN(chunk) || !Number.isInteger(chunk)) {
    throw new Error("Array Chunk: requires 'chunk' argument to be of an integer type");
  }
  /* should be greater than zero */
  else if (chunk <= 0) {
    throw new Error("Array Chunk: requires 'chunk' value to be greater than zero");
  }
  else {
    let resultArray = [];
    let startIndex = 0;
    let endIndex = chunk;

    /* iteration */
    while (startIndex < array.length) {
      const arrayChunk = array.slice(startIndex, endIndex);
      resultArray.push(arrayChunk);

      startIndex += chunk;
      endIndex += chunk;
    }

    return resultArray;
  }
};

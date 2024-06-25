function compress(chars) {
  let read = 0; // Pointer to read characters
  let write = 0; // Pointer to write compressed characters

  while (read < chars.length) { 
    let char = chars[read]; //store the char were working on
    let count = 0;

    // Count repeating chars in this set
    while ( read < chars.length &&  //were not at the end
            chars[read] === char) { //there is a match
      read++;
      count++;
    }

    // Write the character
    chars[write++] = char;

    // If count > 1, write the count digits
    // we use digits to correctly inc our write pointer for multi digit nums
    if (count > 1) {
      const countStr = count.toString();
      for (let digit of countStr) {
        chars[write++] = digit;
      }
    }
  }

  // Sneakily trim to our new length by setting length directly
  chars.length = write;

  return write;
}
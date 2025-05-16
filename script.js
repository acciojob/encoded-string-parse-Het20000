/*
  Parses an encoded string to extract firstName, lastName, and id.

  Args:
    encodedString: The input string in the format "firstName0+lastName0+id".

  Returns:
    An object with three properties: firstName, lastName, and id.
*/
const parseCode = (encodedString) => {
  const parts = encodedString.split("0");
  return {
    firstName: parts[0],
    lastName: parts[parts.findIndex(part => part !== "")],
    id: parts[parts.lastIndexOf(parts.find(part => part !== ""))],
  };
};
function sortByLength(array) {
  if (array.length > 0) {
    return array.sort((a, b) => a.length - b.length);
  }
    return [];
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));

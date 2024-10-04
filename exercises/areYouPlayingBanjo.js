function areYouPlayingBanjo(name) {
  let firstLetter = name[0].toLowerCase();

  if (firstLetter === 'r') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`
  }
}

console.log(areYouPlayingBanjo('red'));
console.log(areYouPlayingBanjo('Rad'));
console.log(areYouPlayingBanjo('bad'));
console.log(areYouPlayingBanjo('Mad'));

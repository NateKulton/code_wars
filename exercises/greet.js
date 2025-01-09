function greet(name, owner) {
  name = name.toUpperCase()[0] + name.slice(1).toLowerCase();
  owner = owner.toUpperCase()[0] + owner.slice(1).toLowerCase();

  if (name === owner) {
      return 'Hello boss';
  } else {
     return 'Hello guest';
  }
}

console.log(greet('Nate', 'Nate'));
console.log(greet('Nate', 'kate'));

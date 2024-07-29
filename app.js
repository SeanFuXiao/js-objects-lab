// const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

// Exercise 1.1:

console.log('Exercise 1.1:');

console.dir(pokemon,{ maxArrayLength:null });

console.log('=============================');

// Exercise 1.2:
console.log('Exercise 1.2:');

const pokemon59 = pokemon.find(num59 => num59.number === 59);
console.log(`The name of the Pokemon with the number 59 is :${pokemon59.name}`);

console.log('=============================');

// Exercise 2:
console.log('Exercise 2:');

console.log(game);

console.log('=============================');

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
console.log('Exercise 3:');

game.difficulty = 'Easy';
console.log(game);

console.log('=============================');


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
console.log('Exercise 4:');

const starterPokemon = pokemon.find(start => start.starter);
game.party.push(starterPokemon);
console.log(game.party);

console.log('=============================');


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
console.log('Exercise 5:');

const addMore = pokemon.filter(add => add.starter);
addMore.forEach(selectedPokemon =>{
  if (!game.party.some(exist => exist.name === selectedPokemon.name)){
    game.party.push(selectedPokemon)
  }
});
console.log(game.party);

console.log('=============================');


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
console.log('Exercise 6:');

game.gyms.forEach(isCompleted3 => {
  if(isCompleted3.difficulty < 3){
    isCompleted3.completed = true;
  }
});
console.log(game.gyms);

console.log('=============================');


/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
console.log('Exercise 7:');

game.party.forEach((ePokemon, idx) => {
  let evolvePokemon;

  switch(ePokemon.number) {
    case 1:
      evolvePokemon = pokemon.find(evolved => evolved.number === 2);
      break;
    case 4:
      evolvePokemon = pokemon.find(evolved => evolved.number === 5);
      break;
    case 7:
      evolvePokemon = pokemon.find(evolved => evolved.number === 8);
      break;
    case 25:
      evolvePokemon = pokemon.find(evolved => evolved.number === 26);
      break;
  }

  if (evolvePokemon) {
    evolvePokemon.starter = true;
    game.party.splice(idx, 1, evolvePokemon);
  }
});

console.log(game.party);

console.log('=============================');

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
console.log('Exercise 8:');

game.party.forEach(printName => {
  console.log(printName.name);
});

console.log('=============================');

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
console.log('Exercise 9:');

const startPokemon = pokemon.filter(sPokemon => sPokemon.starter);

startPokemon.forEach(sPokemon => {
  console.log(sPokemon.name);
});

console.log('=============================');


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
console.log('Exercise 10:');

game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
};

const newPokemon = pokemon.find(pokemons => pokemons.name === 'Chansey');
if (newPokemon) {
  game.catchPokemon(newPokemon);
} else {
  console.log('Chansey not found.');
}

console.log(game.party);

console.log('=============================');



/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
console.log('Exercise 11:');
game.catchPokemon = (pokemonObj) => {

  game.party.push(pokemonObj);

  const ballCount = game.items.find(item => item.name === 'pokeball');
  if (ballCount) {
    ballCount.quantity -= 1;
  }
};

const newPokemon11 = pokemon.find(pokemos => pokemos.name === 'Lapras'); 
if (newPokemon11) {
  game.catchPokemon(newPokemon11);
} else {
  console.log('Lapras not found.');
}

console.log(game.party);
console.log(game.items);

console.log('=============================');


/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
console.log('Exercise 12:');

game.gyms.forEach(isCompleted6 => {
  if(isCompleted6.difficulty < 6){
    isCompleted6.completed = true;
  }
});
console.log(game.gyms);

console.log('=============================');


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
console.log('Exercise 13:');
game.gymStatus = () => {
  const gymTally = {
     completed: 0,
     incomplete: 0, };

  game.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed += 1;
    } else {
      gymTally.incomplete += 1;
    }
  });

  console.log(gymTally);
}
game.gymStatus();

console.log('=============================');


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
console.log('Exercise 14:');

game.partyCount = () => {
  return game.party.length;
};

console.log(game.partyCount());

console.log('=============================');


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

console.log('Exercise 15:');

game.gyms.forEach(isCompleted8 => {
  if(isCompleted8.difficulty < 8){
    isCompleted8.completed = true;
  }
});
console.log(game.gyms);

console.log('=============================');


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log('Exercise 16:');

console.log(game);

console.log('=============================');


/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/
console.log('Exercise 17:');

game.party.sort((hp1, hp2) => hp2.hp - hp1.hp);

console.log(game.party);

console.log('=============================');


/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/
console.log('Exercise 18:');

game.collection = [];
game.catchPokemon = (pokemonObj) => {

  pokemonObj.starter = true;

  if (game.party.length < 6) {
    game.party.push(pokemonObj);
  } else {
    game.collection.push(pokemonObj);
  }

  const ballCount = game.items.find(item => item.name === 'pokeball');
  if (ballCount) {
    ballCount.quantity -= 1;
  }
};

const newPokemon18 = pokemon.find(pokemons => pokemons.name === 'Jynx'); 
if (newPokemon18) {
  game.catchPokemon(newPokemon18);
} else {
  console.log('Jynx not found.');
}

console.log(game.party);
console.log(game.collection);
console.log(game.items);

console.log('=============================');



/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/
console.log('Exercise 19:');

game.catchPokemon = (pokemonObj) => {
  const pokeballItem = game.items.find(item => item.name === 'pokeball');

  if (pokeballItem && pokeballItem.quantity > 0) {
    pokemonObj.starter = true;

    if (game.party.length < 6) {
      game.party.push(pokemonObj);
    } else {
      game.collection.push(pokemonObj);
    }

    pokeballItem.quantity -= 1;
    console.log(`${pokemonObj.name} caught`);
  } else {
    console.log('pokeballs not enough');
  }
};

const newPokemon19_1 = pokemon.find(pokemons => pokemons.name === 'Lapras'); 
if (newPokemon19_1) {
  game.catchPokemon(newPokemon19_1);
} else {
  console.log('Lapras not found.');
}

const newPokemon19_2 = pokemon.find(pokemons => pokemons.name === 'Ditto'); 
if (newPokemon19_2) {
  game.catchPokemon(newPokemon19_2);
} else {
  console.log('Ditto not found.');
}

const newPokemon19_3 = pokemon.find(pokemons => pokemons.name === 'Eevee'); 
if (newPokemon19_3) {
  game.catchPokemon(newPokemon19_3);
} else {
  console.log('Eevee not found.');
}

const newPokemon19_4 = pokemon.find(pokemons => pokemons.name === 'Vaporeon'); 
if (newPokemon19_4) {
  game.catchPokemon(newPokemon19_4);
} else {
  console.log('Vaporeon not found.');
}

const newPokemon19_5 = pokemon.find(pokemons => pokemons.name === 'Jolteon'); 
if (newPokemon19_5) {
  game.catchPokemon(newPokemon19_5);
} else {
  console.log('Jolteon not found.');
}

const newPokemon19_6 = pokemon.find(pokemons => pokemons.name === 'Flareon'); 
if (newPokemon19_6) {
  game.catchPokemon(newPokemon19_6);
} else {
  console.log('Flareon not found.');
}

const newPokemon19_7 = pokemon.find(pokemons => pokemons.name === 'Porygon'); 
if (newPokemon19_7) {
  game.catchPokemon(newPokemon19_7);
} else {
  console.log('Porygon not found.');
}

console.log(game.party);
console.log(game.collection);
console.log(game.items);

console.log('=============================');



/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/
console.log('Exercise 20:');

const pokeballItem = game.items.find(item => item.name === 'pokeball');
if (pokeballItem) {
  pokeballItem.quantity += 1;
  console.log("Pokemon ball added '1' (for test) ")
} 

game.catchPokemon = (name) => {
  const pokeballItem = game.items.find(item => item.name === 'pokeball');

  if (pokeballItem && pokeballItem.quantity > 0) {
    const addPokemon = pokemon.find(pokemons => pokemons.name.toLowerCase() === name.toLowerCase());

    if (addPokemon) {
      addPokemon.starter = true;

      if (game.party.length < 6) {
        game.party.push(addPokemon);
      } else {
        game.collection.push(addPokemon);
      }

      pokeballItem.quantity -= 1;
      return `${name} caught`;
    } else {
      return `${name} does not exist.`;
    }
  } else {
    return 'Not enough pokeballs to catch the desired Pokemon.';
  }
};

console.log(game.catchPokemon('abc'));  
console.log(game.catchPokemon('OmAnYtE'));  
console.log(game.catchPokemon('Aerodactyl'));      

console.log(game.party);
console.log(game.collection);
console.log(game.items);

console.log('=============================');


/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/
console.log('Exercise 21:');

const pokemonType = {};

pokemon.forEach(types => {
  if (!pokemonType[types.type]) {
    pokemonType[types.type] = [];
  }
 
  pokemonType[types.type].push(types);
});

console.log(pokemonType);

console.log('=============================');


//End Thank you
writeCards(["Ada", "Brendan", "Ali"], "birthday");

[
    "Thank you, Ada, for the wonderful birthday gift!",
    "Thank you, Brendan, for the wonderful birthday gift!",
    "Thank you, Ali, for the wonderful birthday gift!"
  ];

  while ([condition]) {
    [loop body]
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]

function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
      chooseSeedLocation();
      plantSeed();
      waterSeed();
      keepWorking = checkForMoreSeeds();
    }
  }

  let countup = 0;
while (countup < 10) {
  console.log(countup++);
}

for (let countup = 0; countup < 10; countup++) {
  console.log(countup);
}

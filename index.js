// To define this "list" in JavaScript we would type
Beatles = [
    "John Lennon",
    "Paul McCartney",
    "Ringo Starr",
    "George Harrison",
]
// Array
// array is a collection that holds multiple pieces of data under a single name
// The individual pieces of data inside an Array are called elements

// arrays provide a number that identifies each element called an index.

// Object
// An Object is a collection data type that holds multiple pieces of data under
//  a collected name whose members can be read and updated by using a key instead of an index.

// Object value 
// The value that's returned from asking an Object what a given key points to is known as the key's value.





const englishMusicByCity = {
    manchester: [
      {
        bandName: "The Smiths",
        memberNames: ["Morrissey", "Johnny", "Andy", "Mike"],
      },
      {
        bandName: "Joy Division",
        memberNames: ["Peter", "Stephen", "Bernard", "Ian"],
      },
    ],
  };
//   elements in an Array and the values in an Object can be Objects or Arrays themselves.

englishMusicByCity["manchester"][0]["bandName"]; //=> "The Smiths"
englishMusicByCity["manchester"][0]["memberNames"]; //=> ["Morrissey", "Johnny", "Andy", "Mike"]

console.log(
  `There were ${englishMusicByCity["manchester"][0]["memberNames"].length} members in ${englishMusicByCity["manchester"][0]["bandName"]}`
);
//=> "There were 4 members in The Smiths"
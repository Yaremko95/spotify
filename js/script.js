class album {
  constructor(id, album, artist, year, songs, image) {
    this.id = id;
    this.album = album;
    this.artist = artist;
    this.year = year;
    this.songs = songs;
    this.image = image;
  }
}

class Song {
  constructor(songName, songLength, artist) {
    this.songName = songName;
    this.songLength = songLength;
    this.artist = artist;
  }
}
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

let users = [
  new User("detart@strive.school", "strive123"),
  new User("tetiana@strive.school", "strive123"),
  new User("anton@strive.school", "strive123"),
];

// let queen2 = [[new album('queen2', 'Queen (Deluxe Edition 2011 Remaster','Queen','1970','11 Sons','./assets/q1.jpg')],
// [
//     new Song('Procession','1:13','Queen'),
//     new Song('Father to Son','6:13','Queen'),
//     new Song('White Queen','1:13','Queen'),
//     new Song('Some Day One Day','1:13','Queen'),
//     new Song('The Losser In The End','1:13','Queen'),
//     new Song('Ogre Battle','1:13','Queen'),
//     new Song('The Fairy Fellers Master Stroke','1:13','Queen'),
//     new Song('Nevermore','1:13','Queen'),
//     new Song('Funny How Love Is','1:13','Queen'),
//     new Song('Seven Seas','1:13','Queen'),
//     new Song("See what a fool I've been",'1:13','Queen')]]

// let encore = [[new album ('encore','Encore','Eminem','2004','23 Songs','./assets/encore.jpg')],
//     [
//     new Song ('Curtains Up','0:48','Eminem'),
//     new Song ('Evil Deeds','4:20','Eminem'),
//     new Song ('Never Enough','2:40','Eminem'),
//     new Song ('Yellow Brick Road','5:46','Eminem'),
//     new Song ('Like Toy Soliders','5:24','Eminem'),
//     new Song ('Mosh','5:19','Eminem'),
//     new Song ('Puke','4:09','Eminem'),
//     new Song ('My 1st Single','5:04','Eminem'),
//     new Song ('Paul','0:33','Eminem'),
//     new Song ('Rain Man','5:15','Eminem'),
//     new Song ('Em Calls Paul','4:28','Eminem'),
//     new Song ('Just Lose It','3:48','Eminem'),
//     new Song ('Ass Like Dat','4:48','Eminem'),
//     new Song ('Spend Some Time','5:48','Eminem'),
//     new Song ('Mockingbird','2:38','Eminem'),
//     new Song ('Crazy in Love','1:18','Eminem'),
//     new Song ('One Shot 2 Shot','3:28','Eminem'),
//     new Song ('Final Thought','4:38','Eminem'),
//     new Song ('Encore ','5:18','Eminem')]]
//
let queen1 = [
  [
    new album(
      "queen1",
      "A Night At The Odeon",
      "Queen",
      "2015",
      "11 Songs",
      "./assets/aNightAtTheOdeon.jpg"
    ),
  ],
  [
    new Song(
      "Now I Am Here - Live At The Hammersmith Odeon, London/ 1975",
      "2:25",
      "Queen"
    ),
    new Song(
      "Ogre Battle - Live At The Hammersmith Odeon, London/ 1975",
      "2:59",
      "Queen"
    ),
    new Song(
      "White Queen (As It Began) - Live At The Hammersmith Odeon, London/ 1975",
      "3:27",
      "Queen"
    ),
    new Song(
      "Bohemian Rhapsody - Live At The Hammersmith Odeon, London/ 1975",
      "3:06",
      "Queen"
    ),
    new Song(
      "Killer Queen - Live At The Hammersmith Odeon, London/ 1975",
      "4:34",
      "Queen"
    ),
    new Song(
      "The March Of The Black Queen - Live At The Hammersmith Odeon, London/ 1975",
      "3:04",
      "Queen"
    ),
    new Song(
      "Brighton Rock - Live At The Hammersmith Odeon, London/ 1975",
      "3:50",
      "Queen"
    ),
    new Song(
      "Son And Daughter - Live At The Hammersmith Odeon, London/ 1975",
      "3:05",
      "Queen"
    ),
    new Song(
      "Big Spender - Live At The Hammersmith Odeon, London/ 1975",
      "3:09",
      "Queen"
    ),
    new Song(
      "Seven Seas Of Rhye - Live At The Hammersmith Odeon, London/ 1975",
      "6:26",
      "Queen"
    ),
    new Song(
      "God Save The Queen - Live At The Hammersmith Odeon, London/ 1975",
      "3:31",
      "Queen"
    ),
  ],
];

let queen2 = [
  [
    new album(
      "queen2",
      "Queen (Deluxe Edition 2011 Remaster",
      "Queen",
      "1970",
      "11 Sons",
      "./assets/queenDeluxe.jpg"
    ),
  ],
  [
    new Song("Procession", "1:13", "Queen"),
    new Song("Father to Son", "6:13", "Queen"),
    new Song("White Queen", "1:13", "Queen"),
    new Song("Some Day One Day", "1:13", "Queen"),
    new Song("The Losser In The End", "1:13", "Queen"),
    new Song("Ogre Battle", "1:13", "Queen"),
    new Song("The Fairy Fellers Master Stroke", "1:13", "Queen"),
    new Song("Nevermore", "1:13", "Queen"),
    new Song("Funny How Love Is", "1:13", "Queen"),
    new Song("Seven Seas", "1:13", "Queen"),
    new Song("See what a fool I've been", "1:13", "Queen"),
  ],
];

let queen3 = [
  [
    new album(
      "queen3",
      "Bohemian Rhapsody (The Original Soundtrack)",
      "Queen",
      "2018",
      "17 Songs",
      "./assets/bohemianRhapsody.jpg"
    ),
  ],
  [
    new Song("20th Century Fof Fanfare", "0:25", "Queen"),
    new Song("Somebody to love - 2011 Mix", "4:55", "Queen"),
    new Song("Doing All Right - Revisited", "3:16", "Smile"),
    new Song("Keep Yourself Alive - Live At The Rainbow", "3:56", "Queen"),
    new Song("Killer Queen - 2011 Mix", "2:59", "Queen"),
    new Song("Fat Bottomed Girls - Live In Paris", "5:54", "Queen"),
    new Song("Bohemian Rhapsody - 2011 Mix", "5:54", "Queen"),
    new Song("Now Im here - Live At The Hammersmith Odeon", "4:25", "Queen"),
    new Song("We Will Rock You - Movie MIx", "2:13", "Queen"),
    new Song("Another One Bites The Dust", "3:13", "Queen"),
    new Song("Under Pressure - Remastered", "4:04", "Queen"),
    new Song("Who Wants To LIve Forever", "5:14", "Queen"),
    new Song("Radio Ga Ga - Live Aid", "4:05", "Queen"),
    new Song("Ay Oh - Live Aid", "0:41", "Queen"),
    new Song("Hammer To Fall - Live Aid", "4:34", "Queen"),
    new Song("We Are The Champions", "3:37", "Queen"),
    new Song("Show Must Go On", "4:31", "Queen"),
  ],
];

let queen4 = [
  [
    new album(
      "queen4",
      "Hot Space (2011 Remaster)",
      "Queen",
      "1982",
      "11 Songs",
      "./assets/hotSpace.jpg"
    ),
  ],
  [
    new Song("Staying Power - Remastered 2011", "0:25", "Queen"),
    new Song("Dancer - Remastered 2011", "4:12", "Queen"),
    new Song("Black Cat - Remastered 2011", "3:50", "Smile"),
    new Song("Body Language - Remastered 2011", "4:56", "Queen"),
    new Song("Action This Day - Remastered 2011", "4:33", "Queen"),
    new Song("Put Out The Fire - Remastered 2011", "3:54", "Queen"),
    new Song("Life Is Real (Song For Lennon) - 2011 Mix", "3:18", "Queen"),
    new Song("Calling All Girls - Remastered 2011", "4:25", "Queen"),
    new Song(
      "Las Palabras De Amor (The Words Of Love) - Remastered 2011",
      "3:29",
      "Queen"
    ),
    new Song("Cool Cat - Remastered 2011", "3:13", "Queen"),
    new Song("Under Pressure - Remastered 2011", "4:04", "Queen"),
  ],
];

let queen5 = [
  [
    new album(
      "queen5",
      "News Of The World (2011 Remaster)",
      "Queen",
      "1977",
      "11 Songs",
      "./assets/newsOfTheWorld.jpg"
    ),
  ],
  [
    new Song("We Will Rock You - Remastered", "2:25", "Queen"),
    new Song("We Are The Champions - Remastered 2011", "2:59", "Queen"),
    new Song("Sheer Heart Attack  - Remastered 2011", "3:27", "Smile"),
    new Song("All Dead, All Dead - Remastered 2011", "3:06", "Queen"),
    new Song("Spread Your Wings - Remastered 2011", "4:34", "Queen"),
    new Song("Fight From The Inside - Remastered 2011", "3:04", "Queen"),
    new Song("Get Down, Make Love - 2011 Mix", "3:50", "Queen"),
    new Song("Sleeping On The Sidewalk - Remastered 2011", "3:05", "Queen"),
    new Song("Who Needs You - Remastered 2011", "3:09", "Queen"),
    new Song("It Is Late - Remastered 2011", "6:26", "Queen"),
    new Song("My Melancholy Blues - Remastered 2011", "3:31", "Queen"),
  ],
];

let queen6 = [
  [
    new album(
      "queen6",
      "Return Of The Champions",
      "Queen",
      "2005",
      "15 Songs",
      "./assets/returnOfTheChampions.jpg"
    ),
  ],
  [
    new Song("Reaching Out - Live in Sheffield", "2:25", "Queen"),
    new Song("Tie Your Mother Down - Live in Sheffield", "2:59", "Queen"),
    new Song("I Want To Break Free    - Live in Sheffield", "3:27", "Smile"),
    new Song("Fat Bottomed Girls - Live in Sheffield", "3:06", "Queen"),
    new Song("Wishing Well - Live in Sheffield", "4:34", "Queen"),
    new Song("Another One Bites The Dust - Live in Sheffield", "3:04", "Queen"),
    new Song(
      "Crazy Little Thing Called Love - Live in Sheffield",
      "3:50",
      "Queen"
    ),
    new Song("39 - Live in Sheffield", "3:05", "Queen"),
    new Song("Love Of My Life - Live in Sheffield", "3:09", "Queen"),
    new Song("Let There Be Drums - Live in Sheffield", "6:26", "Queen"),
    new Song("Last Horizon - Live in Sheffield", "3:31", "Queen"),
    new Song("Radio Ga Ga - Live in Sheffield", "3:31", "Queen"),
    new Song("A Kind Of Magic - Live in Sheffield", "3:31", "Queen"),
    new Song("I Want It All - Live in Sheffield", "3:31", "Queen"),
    new Song("God Save The Queen - Live in Sheffield", "3:31", "Queen"),
  ],
];

let queen7 = [
  [
    new album(
      "queen7",
      "On Air",
      "Queen",
      "2016",
      "11 Songs",
      "./assets/newsOfTheWorld.jpg"
    ),
  ],
  [
    new Song(
      "My Fairy King - BBC Session/ February 5th 1973, Langham",
      "2:25",
      "Queen"
    ),
    new Song(
      "Keep Yourself Alive - BBC Session/ February 5th 1973, Langham",
      "2:59",
      "Queen"
    ),
    new Song(
      "Doing All Right  - BBC Session/ February 5th 1973, Langham",
      "3:27",
      "Smile"
    ),
    new Song("Liar - BBC Session/ February 5th 1973, Langham", "3:06", "Queen"),
    new Song(
      "Son And Daughter - BBC Session/ February 5th 1973, Langham",
      "4:34",
      "Queen"
    ),
    new Song(
      "Ogre Battle - BBC Session/ February 5th 1973, Langham",
      "3:04",
      "Queen"
    ),
    new Song(
      "Great King Rat - BBC Session/ February 5th 1973, Langham",
      "3:50",
      "Queen"
    ),
    new Song(
      "Nevermore - BBC Session/ February 5th 1973, Langham",
      "3:05",
      "Queen"
    ),
    new Song(
      "Stone Cold Crazy - BBC Session/ February 5th 1973, Langham",
      "3:09",
      "Queen"
    ),
    new Song(
      "Flick Of The Wrist - BBC Session/ February 5th 1973, Langham",
      "6:26",
      "Queen"
    ),
    new Song(
      "Tenement Funster - BBC Session/ February 5th 1973, Langham",
      "3:31",
      "Queen"
    ),
  ],
];

let queen8 = [
  [
    new album(
      "queen8",
      "Live At The Rainbow",
      "Queen",
      "2014",
      "11 Songs",
      "./assets/liveAtTheRainbow.jpg"
    ),
  ],
  [
    new Song("Procession- Live At Tha Rainbow, LOngon", "2:25", "Queen"),
    new Song("We Are The Champions - Remastered 2011", "2:59", "Queen"),
    new Song("Sheer Heart Attack  - Remastered 2011", "3:27", "Smile"),
    new Song("All Dead, All Dead - Remastered 2011", "3:06", "Queen"),
    new Song("Spread Your Wings - Remastered 2011", "4:34", "Queen"),
    new Song("Fight From The Inside - Remastered 2011", "3:04", "Queen"),
    new Song("Get Down, Make Love - 2011 Mix", "3:50", "Queen"),
    new Song("Sleeping On The Sidewalk - Remastered 2011", "3:05", "Queen"),
    new Song("Who Needs You - Remastered 2011", "3:09", "Queen"),
    new Song("It Is Late - Remastered 2011", "6:26", "Queen"),
    new Song("My Melancholy Blues - Remastered 2011", "3:31", "Queen"),
  ],
];

let queen9 = [
  [
    new album(
      "queen9",
      "Hungarian Rhapsody (Live In Budapest / 1986)",
      "Queen",
      "2012",
      "11 Songs",
      "./assets/hungarian.jpg"
    ),
  ],
  [
    new Song("We Will Rock You - Remastered", "2:25", "Queen"),
    new Song("We Are The Champions - Remastered 2011", "2:59", "Queen"),
    new Song("Sheer Heart Attack  - Remastered 2011", "3:27", "Smile"),
    new Song("All Dead, All Dead - Remastered 2011", "3:06", "Queen"),
    new Song("Spread Your Wings - Remastered 2011", "4:34", "Queen"),
    new Song("Fight From The Inside - Remastered 2011", "3:04", "Queen"),
    new Song("Get Down, Make Love - 2011 Mix", "3:50", "Queen"),
    new Song("Sleeping On The Sidewalk - Remastered 2011", "3:05", "Queen"),
    new Song("Who Needs You - Remastered 2011", "3:09", "Queen"),
    new Song("It Is Late - Remastered 2011", "6:26", "Queen"),
    new Song("My Melancholy Blues - Remastered 2011", "3:31", "Queen"),
  ],
];

let queen10 = [
  [
    new album(
      "queen10",
      "Innuendo (2011 Remastered)",
      "Queen",
      "1977",
      "11 Songs",
      "./assets/innuendo.jpg"
    ),
  ],
  [
    new Song("We Will Rock You - Remastered", "2:25", "Queen"),
    new Song("We Are The Champions - Remastered 2011", "2:59", "Queen"),
    new Song("Sheer Heart Attack  - Remastered 2011", "3:27", "Smile"),
    new Song("All Dead, All Dead - Remastered 2011", "3:06", "Queen"),
    new Song("Spread Your Wings - Remastered 2011", "4:34", "Queen"),
    new Song("Fight From The Inside - Remastered 2011", "3:04", "Queen"),
    new Song("Get Down, Make Love - 2011 Mix", "3:50", "Queen"),
    new Song("Sleeping On The Sidewalk - Remastered 2011", "3:05", "Queen"),
    new Song("Who Needs You - Remastered 2011", "3:09", "Queen"),
    new Song("It Is Late - Remastered 2011", "6:26", "Queen"),
    new Song("My Melancholy Blues - Remastered 2011", "3:31", "Queen"),
  ],
];

let queen11 = [
  [
    new album(
      "queen11",
      "Flash Gordon (Remastered)",
      "Queen",
      "1977",
      "11 Songs",
      "./assets/flash.jpg"
    ),
  ],
  [
    new Song("We Will Rock You - Remastered", "2:25", "Queen"),
    new Song("We Are The Champions - Remastered 2011", "2:59", "Queen"),
    new Song("Sheer Heart Attack  - Remastered 2011", "3:27", "Smile"),
    new Song("All Dead, All Dead - Remastered 2011", "3:06", "Queen"),
    new Song("Spread Your Wings - Remastered 2011", "4:34", "Queen"),
    new Song("Fight From The Inside - Remastered 2011", "3:04", "Queen"),
    new Song("Get Down, Make Love - 2011 Mix", "3:50", "Queen"),
    new Song("Sleeping On The Sidewalk - Remastered 2011", "3:05", "Queen"),
    new Song("Who Needs You - Remastered 2011", "3:09", "Queen"),
    new Song("It Is Late - Remastered 2011", "6:26", "Queen"),
    new Song("My Melancholy Blues - Remastered 2011", "3:31", "Queen"),
  ],
];

let queen12 = [
  [
    new album(
      "queen12",
      "Jazz (2011 Remaster)",
      "Queen",
      "2011",
      "11 Songs",
      "./assets/jazz.jpg"
    ),
  ],
  [
    new Song("We Will Rock You - Remastered", "2:25", "Queen"),
    new Song("We Are The Champions - Remastered 2011", "2:59", "Queen"),
    new Song("Sheer Heart Attack  - Remastered 2011", "3:27", "Smile"),
    new Song("All Dead, All Dead - Remastered 2011", "3:06", "Queen"),
    new Song("Spread Your Wings - Remastered 2011", "4:34", "Queen"),
    new Song("Fight From The Inside - Remastered 2011", "3:04", "Queen"),
    new Song("Get Down, Make Love - 2011 Mix", "3:50", "Queen"),
    new Song("Sleeping On The Sidewalk - Remastered 2011", "3:05", "Queen"),
    new Song("Who Needs You - Remastered 2011", "3:09", "Queen"),
    new Song("It Is Late - Remastered 2011", "6:26", "Queen"),
    new Song("My Melancholy Blues - Remastered 2011", "3:31", "Queen"),
  ],
];
const music = {
  queen1: queen1,
  queen2: queen2,
  queen3: queen3,
  queen4: queen4,
  queen5: queen5,
  queen6: queen6,
  queen7: queen7,
  queen8: queen8,
  queen9: queen9,
  queen10: queen10,
  queen11: queen11,
  queen12: queen12,
};
let clickedAlbum;
//let x = document.querySelectorAll('.albumsName')

// x.forEach(element => {
//         element.addEventListener('click',function(s){
//             console.log(s.target.querySelector('img').name)
//             clickedAlbum = s.currentTarget.querySelector('img').name
//             window.location.href="playlist.html?album=" + s.currentTarget.querySelector('img').name

//         })

//     });

//ALBUM FILLUP
function albumInfo(albumName) {
  let mainDiv = document.querySelector("#AlbumInfo");
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let btnWrapper = document.createElement("div");
  btnWrapper.className = "w-50 d-flex justify-content-center   m-auto mb-2";
  let buton = document.createElement("button");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let icon = document.createElement("i");
  let icon1 = document.createElement("i");
  div.className = "container mt-5 albumImage";
  img.className = "image-fluid w-75 ";
  p.className = "mt-2 text-secondary";
  p1.className = "mt-2 text-secondary";
  p2.className = "mt-2 text-secondary";
  icon.className = "fa fa-heart mt-5 mr-2";
  img.src = albumName[0][0].image;
  div.appendChild(img);
  buton.className = "rounded-pill btn btn-success w-50";
  buton.innerText = "Play";
  btnWrapper.appendChild(buton);
  h3.className = "mt-2 text-light text-center w-50 m-auto";
  h3.innerText = albumName[0][0].album;
  p.innerText = albumName[0][0].artist;
  p1.innerText = albumName[0][0].year + " " + albumName[0][0].songs;
  icon1.innerText = "...";
  p2.appendChild(icon);
  p2.appendChild(icon1);
  mainDiv.appendChild(div);
  mainDiv.appendChild(h3);
  mainDiv.appendChild(p);
  mainDiv.appendChild(btnWrapper);
  mainDiv.appendChild(p1);
  mainDiv.appendChild(p2);
}
//Playlist fillup
function playListFill(albumSongs) {
  let mainTable = document.querySelector("#playList");
  for (let i = 0; i < albumSongs[1].length; i++) {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let icon = document.createElement("i");
    let a = document.createElement("a");
    icon.className = "fa fa-music";
    th.scope = "row";
    th.className = "d-flex justify-content-center";
    td.className = "text-light pl-0";
    td1.className = "text-right";
    a.className = "playListSongs";
    a.innerText = albumSongs[1][i].songName;
    td1.innerText = albumSongs[1][i].songLength;
    td.appendChild(a);
    th.appendChild(icon);
    tr.appendChild(th);
    tr.appendChild(td);
    tr.appendChild(td1);
    mainTable.appendChild(tr);
  }
}

//Login Validation

function validateUser() {
  let a = 0;
  let emailInput = document.querySelector("#InputEmail").value.toLowerCase();
  let passwordInput = document.querySelector("#InputPassword").value;
  users.forEach((element) => {
    if (emailInput == element.email && passwordInput == element.password) {
      window.location.href = "albums.html";
      a++;
    }
  });
  if (a === 0) {
    // alert ('Incorrect Email or Password')
    let parent = document.querySelector("form");
    let input = document.querySelectorAll("form input");
    let element = document.createElement("span");
    element.className = "mb-2 error";

    element.style.color = "red";
    let newElem = document.querySelectorAll("form span");
    if (newElem.length != 0) {
      newElem.forEach((element) => {
        element.remove();
      });
    }
    if (input[0].value === "" || input[1].value === "") {
      element.innerText = "Please, fill required fields";
      parent.insertBefore(element, parent.firstChild);
    } else {
      element.innerText = "Invalid Email or Password";
      parent.insertBefore(element, parent.firstChild);
    }
  }
}
// var eElement; // some E DOM instance
// var newFirstElement; //element which should be first in E

//eElement.insertBefore(newFirstElement, eElement.firstChild);

function updatePlayer() {
  let names = document.querySelectorAll(".playListSongs");
  for (let i = 0; i < names.length; i++) {
    names[i].addEventListener("click", function (x) {
      document.querySelector("#musicInfo").classList.remove("d-none");
      document.querySelector("#musicInfo").classList.remove("d-flex");
      document.querySelectorAll("#musicInfo span")[0].innerText =
        x.currentTarget.innerHTML;
      console.log(x.currentTarget.innerHTML);
    });
  }
}

const initialDefinitions = () => {
  let searchInput = document.getElementById("search-artist");
  searchInput.onkeyup = function (e) {
    let value = searchInput.value;
    setTimeout(() => {
      searchSongs(value);
    }, 500);
  };
};
window.onload = initialDefinitions;

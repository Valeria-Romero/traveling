var tigger = { character: "Tigger" }; 
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var bees = { character: "Bees" };
var christopherRobin = { character: "Christopher Robin" };
var owl = { character: "Owl" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Ghoper" };
var kanga = { character: "Kanga" };
var Eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };

tigger.north = pooh;
tigger.south = null;
tigger.west = null;
tigger.east = null;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = christopherRobin;

piglet.north = owl;
piglet.east = pooh;
piglet.west = null;
piglet.south = null;

bees.north = rabbit;
bees.west = pooh;
bees.south = null;
bees.east = null;

owl.east = christopherRobin;
owl.south = piglet;
owl.north = null;
owl.west = null;

christopherRobin.north = kanga;
christopherRobin.south = pooh;
christopherRobin.west = owl;
christopherRobin.east = rabbit;

rabbit.west = christopherRobin;
rabbit.east = gopher;
rabbit.south = bees;
rabbit.north = null;

kanga.south = christopherRobin;
kanga.north = Eeyore;
kanga.west = null;
kanga.east = null;

Eeyore.south = kanga;
Eeyore.east = heffalumps;
Eeyore.north = null;
Eeyore.west = null;

heffalumps.west = Eeyore;
heffalumps.north = null;
heffalumps.south = null;
heffalumps.east = null;

gopher.north = null;
gopher.south = null;
gopher.west = rabbit;
gopher.east = null;



var player = {
        location: tigger
    }

function move(direction){
    if(direction == "north"){
        if(player.location.north == null){
            console.log("You may not go that way!");
            return
        }
        player.location = player.location.north;
        console.log("You are now at " + player.location.character + "'s house");
    }

    if(direction == "south"){
        if(player.location.south == null){
            console.log("You may not go that way!");
            return
        }
        player.location = player.location.south;
        console.log("You are now at " + player.location.character + "'s house");
    }

    if(direction == "west"){
        if(player.location.west == null){
            console.log("You may not go that way!");
            return
        }
        player.location = player.location.west;
        console.log("You are now at " + player.location.character + "'s house");
    }

    if(direction == "east"){
        if(player.location.east == null){
            console.log("You may not go that way!");
            return
        }
        player.location = player.location.east;
        console.log("You are now at " + player.location.character + "'s house");
    }
    
}


var version = "0.2.1";
// -30, -8 - good for Kowloon Start

var x = 0;    // holds x movement, defines starting position, defines north/south
var y = 0;    // holds y movement, defines starting position, defines west/east
var objectHere = false;     // tells game if something interactable is here
var itemHere = false;       // tells game if there is an item you can pick up
var locationHere = false;   // tells game if there is a location you can enter
var ifInside = false;       // tells game if you are inside a structure
var insideX = 0; var insideY = 0;   // use if inside a location to tell the game your position
var insideLevel = 0;        // if inside, how deep inside
document.write(x + ",");
document.write(y);	
document.write(" Script Intialized");
document.write(" Version: " + version);
document.write(" Date Updated: 7-31-2024")
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("hide-on-load").style.display = "none"; }, false);

// when N is pressed
function moveNorth() {
    if (ifInside == true) {
        insideX++;
        document.getElementById("options-logic").innerHTML = "Inside (" + insideX + "," + insideY + ")" + "(" + x + "," + y + ")";
        document.getElementById("location-logic").innerHTML = "You head Northwards.";
        insideFinal();
        findItem();
    }
    else {
        x++;
        document.getElementById("options-logic").innerHTML = "(" + x + "," + y + ")";
        document.getElementById("location-logic").innerHTML = "You move North.";
        locationFinal();
        findItem();
    }
}
// when S is pressed
function moveSouth() {
    if (ifInside == true) {
        insideX--;
        document.getElementById("options-logic").innerHTML = "Inside (" + insideX + "," + insideY + ")" + "(" + x + "," + y + ")";
        document.getElementById("location-logic").innerHTML = "You head Southwards.";
        insideFinal();
        findItem();
    }
    else {
        x--;
        document.getElementById("options-logic").innerHTML = "(" + x + "," + y + ")";
        document.getElementById("location-logic").innerHTML = "You move South.";
        locationFinal();
        findItem();
    }
}
// when W is pressed
function moveWest() {
    if (ifInside == true) {
        insideY--;
        document.getElementById("options-logic").innerHTML = "Inside (" + insideX + "," + insideY + ")" + "(" + x + "," + y + ")";
        document.getElementById("location-logic").innerHTML = "You head Westwards.";
        insideFinal();
        findItem();
    }
    else {
    y--;
    document.getElementById("options-logic").innerHTML = "(" + x + "," + y + ")";
    document.getElementById("location-logic").innerHTML = "You move West.";
    locationFinal();
    findItem();
    }
}
// when E is pressed
function moveEast() {
    if (ifInside == true) {
        insideY++;
        document.getElementById("options-logic").innerHTML = "Inside (" + insideX + "," + insideY + ")" + "(" + x + "," + y + ")";
        document.getElementById("location-logic").innerHTML = "You head Eastwards.";
        insideFinal();
        findItem();
    }
    else {
        y++;
        document.getElementById("options-logic").innerHTML = "(" + x + "," + y + ")";
        document.getElementById("location-logic").innerHTML = "You move East.";
        locationFinal();
        findItem();
    }
}

var sameTerrain = false;
// beginning of location logic code, use these locations if on the world map
function locationFinal() {
    if (x == 2 && y == 0) {
        document.getElementById("location-description").innerHTML = "You arrive at the castle. The gates are barred and guards stand at the walls, watching over you. There is no way inside as of yet.";
    }
     else if (x == 1 && y == 0) {
        document.getElementById("location-description").innerHTML = "You arrive at the castle market, it is bustling with merchants and commoners alike. There is nothing you'd find of use for sale.";
    }
    else if (x == 5 && sameTerrain == false) {
        document.getElementById("location-description").innerHTML = "You arrive at the great river.";
        sameTerrain = true;
    }
    else if (x == 5 && sameTerrain == true) {
        document.getElementById("location-description").innerHTML = "You continue along the great river, it continues along this path as far as you can see, and likely much further."
        sameTerrain = true;
    }
    else if (x == 4 && y == 6) {
        document.getElementById("location-description").innerHTML = "You come across a lonely hill stead, leading up the path are a series of signs that ask adventurers to inquire inside.";
    }
    // map
    else if (x == -3 && y == -2) {
        document.getElementById("location-description").innerHTML = "You have found a map post, on it in the center is a picture of a castle with the label, (2,0). Above it is a river at (5,y). At (8,5) the starport stands, just as impressive as the castle if not more so. <br> In the corner of the map lies a massive fortification at (52,5), trailing off the edge. In the other corner at (-32,-8) you see a massive city, the name has defaced by assumably hooligans. On the back of the post is a post board filled with various requests. The central one asks for all heroes to band together to defeat the undead army at (52,5). Ha, fat chance you think. There are some job offers at the starport, though nothing you find appealing. <br> In the corner one catches your eye, it shows a location (4,6). It promises a great reward to heroes that do a valiant deed.";
    }
    // map finding
    else if (x == -3 && y > -2 && y < 4) {
        document.getElementById("location-description").innerHTML = "You see a post to your west.";
    }
    else if (x < 2 && x > -3 && y == -2) {
        document.getElementById("location-description").innerHTML = "You see a post to the south.";
    }
    else if (x == 8 && y == 5) {
        document.getElementById("location-description").innerHTML = "You arrive at a starport. Five brilliant starships line the way. The first is blue, with light green trimmings. This ship has class and a degree of splendor to it. It is currently covered in crew, fixed on repairs and refueling. <br> The second is gray and ovoid. <br> The third is sleek and black, with chrome trimmings. Two massive engines sit behind the starship, it would appear to go very fast or carry a heavy load. <br> The fourth is mostly translucent, with glowing spots all around it. <br> The last is yours, but you lost the key some time ago. It is orange and purple, themed after a famous sports team from your home town.";
    }
    else if (x == 52 && y == 5) {
        document.getElementById("location-description").innerHTML = "Before you lies the way of ruin, the foul citadel, Aggramidir. You shake in your boots from the cold.";
    }
    else if (x == -32 && y == -8) {
       document.getElementById("location-description").innerHTML = "You arrive at the great walled city of Kowloon. Alluding to the term nine dragons, it is rumored that once those very dragons enchanted the land you stand upon and made way for the nomads who came to settle these lands. Surrounding the city is a number of smaller settlements as the city grew beyond the bounds of its walls."; 
    }
    else if (x > 50) {
        document.getElementById("location-description").innerHTML = "You travel in the great white north.";
    }
    else if (x < -30) {
        document.getElementById("location-description").innerHTML = "Before you lies a great desert that spans as far as the eye can see."
    }
    // Reaches this point if it is no other location, this should clear most location-based variables
    else {
        document.getElementById("location-description").innerHTML = "You continue on your journey.";
        sameTerrain = false;
        objectHere = false;
    }		
}
// if inside a structure or city, use these locations, first setup an insideLocation variable for each location you may enter and set it to true when you enter a location with z.
var insideKowloonCity = false;
// PAUSED - CURRENTLY WORKING ON
function insideFinal() {
    if (insideKowloonCity == true) {
        if (insideX == 0 && insideY == 0) {
         //   document.getElementById("item-logic").innerHTML = "Leaving is a much easier process. You may leave through here at anytime.";
        //    locationHere = true;
            document.getElementById("location-description").innerHTML = "Immediately inside the city you come across a grand bazaar, to the east and west you see some interesting stalls. To the north you can see the rest of the city. To the south is the gates, and the smaller settlements.";
        }
        else if (insideX == -1 && insideY == 0) {
            document.getElementById("location-description").innerHTML = "You walk through the gates, while still exploring the city - this way you can find the smaller settlements.";
        }
        else if (insideX == -1 && insideY != 0 ) {
            document.getElementById("location-description").innerHTML = "You find here the southern wall, dividing the city from what lies beyond, and what lies beyond is the smaller villages."
        }
        else if (insideX == 0 && insideY == -1) {
            document.getElementById("location-description").innerHTML = "There are many stalls advertising various valuable goods. One that catches your interest is an ancient artifact stand, you inquire if there are any that are particually valuable. They reply that they once had a great ring of power for sale, but it was stolen by a skulking sneak-thief. He implores that you inquire at the guard's office for more information."
        }
        else if (insideX == 0 && insideY == 1) {
            document.getElementById("location-description").innerHTML = "The stalls here advertise various weapons and armor, though not for sale for outsiders like yourself. While admiring the goods a tipsy guardsmen shares a secret. He says that special allowance to use these goods would be allowed for performing a heroic deed at the palace."
        }
        else {
            document.getElementById("location-description").innerHTML = "You wander about the walled city";
            document.getElementById("item-logic").innerHTML = "";
            locationHere = false;
        }
        
    }
}

// item logic
var itemLaserRifle = false;     // sets whether the player has the laser rifle
var foulLegionNumber = 10;
var valLaserRifle;
var foulLegionStands = true;
var stolenLaserRifle = false;


// when z is pressed
function activateItem() {
    if (itemHere == true) {
        if (x == 8 && y == 5) {
            itemLaserRifle = true;
            document.getElementById("location-logic").innerHTML = "You pick up the laser rifle.";
            findItem();
            inventory();
        }
        else if (x == 1 && y == 0) {
            itemLaserRifle = true;
            stolenLaserRifle = false;
            document.getElementById("location-logic").innerHTML = "You purchase the laser rifle."
            findItem();
            inventory();
        }
    }
    // if player kills the foul legion they should get an achievement
    else if (objectHere == true) {
        if (x == 52 && y == 5 && foulLegionStands == true && itemLaserRifle == true) {
            document.getElementById("item-logic").innerHTML = "You blast down an undead soldier with your laser rifle from a distance. Another takes their place.";
            foulLegionNumber--;
        }
        // when player kills the foul legion
            if (foulLegionNumber == 0) {
                document.getElementById("item-logic").innerHTML = "You blast down the last of the undead, you are a hero to all and this achievement will stand the test of time.";
                foulLegionStands = false;
                achievement();
            }
    }
// CURRENTLY WORKING ON
    else if (locationHere == true) {
        if (x == 4 && y == 6 && ringsOfPower == 0) {
            ringsOfPower += 1;
            document.getElementById("location-logic").innerHTML = "You enter the hill stead.";
            document.getElementById("location-description").innerHTML = "Inside you find an old man tending the fire place in the living room. He invites you to sit on a chair and as you do so, he begins to tell a tale. He spins a tale of three kings who shared dominion over these lands. To cement their rule, and their friendship - they forged three rings of power. Those kings are long dead, the artifacts long lost. <br> I wouldn't ask this of anyone but the greatest heroes, but I need those rings. My daughter is deathly ill from a mighty curse - you can hear someone coughing. That's her, she has fallen ill from drinking from the river nearby. I took her to many doctors, yet none could diagnose what ails her. Finally a witch doctor told me of the rings, and now I implore you to find those rings and use them to help my poor girl.";
            document.getElementById("item-logic").innerHTML = "You may leave when ready.";
        }
        else if (x == 4 && y == 6 && ringsOfPower == 1) {
            document.getElementById("location-logic").innerHTML = "You return to the hill stead and enter."
            document.getElementById("location-description").innerHTML = "Upon your return the old man is eager to help you on your quest. He has little idea of where to find the rings, but he knows a solution. 'Seek the witch doctor, I implore you!' He hands you a cup of tea and explains, 'I see him very rarely but hear he lives near the old starport, do try to find him and ask him for the rings' locations.'";
            document.getElementById("item-logic").innerHTML = "You may leave after finishing your tea.";
        }
        // PAUSED - CURRENTLY WORKING ON
        else if (x == -32 && y == -8 && ifInside == false) {
            document.getElementById("location-logic").innerHTML = "It takes some time to get through customs, but eventually you enter the walled city.";
            document.getElementById("options-logic").innerHTML = "Inside (" + insideX + "," + insideY + ")" + "(" + x + "," + y + ")";
            ifInside = true;
            insideKowloonCity = true;
            insideFinal();
        }
        else if (x == -32 && y == -8 && insideX == 0 && insideY == 0 && insideKowloonCity == true) {
            document.getElementById("location-logic").innerHTML = "You leave right through the gates, the guards waving you by.";
            document.getElementById("options-logic").innerHTML = "(" + x + "," + y + ")";
            ifInside = false;
            insideKowloonCity = false;
            locationFinal();
        }
    }
    else {
        document.getElementById("location-logic").innerHTML = "There is nothing here to grab or use.";
    }
}

function findItem() {
    if (x == 8 && y == 5 && itemLaserRifle == false && stolenLaserRifle == false) {
        itemHere = true;
        document.getElementById("item-logic").innerHTML = "A laser rifle lies on the ground.";
    }
    else if (x == -32 && y == -8 && insideX == 0 && insideY == 0 && ifInside == true) {
        document.getElementById("item-logic").innerHTML = "Leaving is a much easier process. You may leave through here at anytime.";
        locationHere = true;
    }
    else if (x == -32 && y == -8 && ifInside == false) {
        document.getElementById("item-logic").innerHTML = "You may enter the walled city, who knows what you may find inside...";
        locationHere = true;
    }
    else if (x == 4 && y == 6) {
        document.getElementById("item-logic").innerHTML = "You may enter the hill stead.";
        locationHere = true;
    }
    else if (x == 8 && y == 5 && itemLaserRifle == true) {
        itemHere = false;
        document.getElementById("item-logic").innerHTML = "There is no longer a laser rifle here.";
    }
    // robber code - sets stolenLaserRifle to true, should be checked later to find the rifle again
    else if (x == 18 && y == 5 && itemLaserRifle == true) {
        document.getElementById("item-logic").innerHTML = "A capricious goblin thief eyes your laser rifle, before you can react you are on the ground. Less one laser rifle.";
        stolenLaserRifle = true;
        itemLaserRifle = false;
        inventory();
    }
    // retrieval code - checks if stolenLaserRifle is true and you are in the market, then sets itemHere to true, so that you may pick up the item
    else if (x == 1 && y == 0 && stolenLaserRifle == true) {
    itemHere = true;
    document.getElementById("item-logic").innerHTML = "However, admist the stalls you come across a shiny artifact. It is your old laser rifle, stolen by that goblin, for sale for a fair price."
    }
    else if (x == 52 && y == 5 && foulLegionStands == true) {
        document.getElementById("item-logic").innerHTML = "Before the citadel lies an army of the undead. There is no way to get closer unscathed. A rotting warrior stands in your path.";
        objectHere = true;
    }
    else if (x == 52 && y == 5 && foulLegionStands == false) {
        document.getElementById("item-logic").innerHTML = "Before the citadel is a massive pile of corpses, undead corpses, reslain by your hand.";
        objectHere = false;
    }
    // IS CURRENTLY BREAKING
    else {
        itemHere = false;
        objectHere = false;
        locationHere = false;
        document.getElementById("item-logic").innerHTML = "";
    }
}

// checks if an item is had, then adds text to its value, then appends that to the inventory
function inventory() {
    if (itemLaserRifle == true) {
        valLaserRifle = "Laser Rifle";
    }
    else if (itemLaserRifle == false) {
        valLaserRifle = "";
    }
    document.getElementById("inventory").innerHTML = "Inventory: " + valLaserRifle;     // add new values as new items pop up
}

// checks if an item is had, then adds text to its value, then appends that to the achievements
var valLegionAchievement;
function achievement() {
    if (foulLegionStands == false) {
        valLegionAchievement = "You slew the armies of Aggramidir.";
    }
    else if (foulLegionStands == true) {
        valLegionAchievement = "";
    }
    document.getElementById("achievements").innerHTML = "Achievements:" + valLegionAchievement;     // add new values as new achievements pop up
}

// quest logic - all quests should start at 0, then increase as the quest progresses

var ringsOfPower = 0; var valRingsOfPowerQuest;
// checks if an item is had, tehn adds text to its value, then appends that to the quests
function quest() {
    if (ringsOfPower == 0) {
        valRingsOfPowerQuest = "";
    }
    else if (ringsOfPower == 1) {
        valRingsOfPowerQuest = "Obtain the Rings of Power (0/3) (4,6)";
    }
    else if (ringsOfPower == 2) {
        valRingsOfPowerQuest = "Obtain the Rings of Power (1/3) (4,6)";
    }
    else if (ringsOfPower == 2) {
        valRingsOfPowerQuest = "Obtain the Rings of Power (2/3) (4,6)";
    }
    else if (ringsOfPower == 2) {
        valRingsOfPowerQuest = "Obtain the Rings of Power *(3/3) (4,6)";
    }
    document.getElementById("quests").innerHTML = "Quests: " + valRingsOfPowerQuest;    // add new values as new quests are obtained
}

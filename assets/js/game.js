var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);



// fight function
var fight = function(enemyName) {

    while(enemyHealth > 0) {
    // Alert players we are starting the round
        window.alert("Welcome to robot Gladiators!");

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

            if (promptFight === "fight" || promptFight === "FIGHT") {
                // Define enemyHealth-playerAttack sequence
                enemyHealth = enemyHealth - playerAttack;
                console.log(
                    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );

                // Check enemies health
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                } 
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }

                // Define playerHealth - enemyAttack sequence
                playerHealth = playerHealth - enemyAttack;
                console.log(
                    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );

                // Check players health
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                } 
                else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
                // If player choses to skip
                } 
                else if (promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                    
                // if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
                }

                // if no (false), ask question again by running fight() again
                else {
                    fight();
                }
            }
                // window.alert(playerName + " has chosen to skip the fight!");
            
                else {
                window.alert("You need to choose a valid option. Try again!");
            }
    }
};

for(var i=0; i<enemyNames.length; i++ ) {
    debugger;
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    // console.log(enemyNames[i]);
    // console.log(i);
    // console.log(enemyNames[i] + " is at " + i + " index");
}

// var fight = function(enemyName) {
//     // fight function statements.
// }
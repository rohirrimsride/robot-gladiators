var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
console.log(enemyNames.length);

// fight function
var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {
        // ask if player wants to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // If player choses to skip confirm and stop the loop 
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                    
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }   
           
        // Define enemyHealth-playerAttack sequence
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemies health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            // award player money for winning
            playerMoney = playerMoney + 20;
            // leave while() loop since enemy is dead
            break;
        } else {
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
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }                 
    }// end of while() loop   
};// end of fight function

for(var i=0; i<enemyNames.length; i++ ) {
    // If player is still alive, keep fighting
    if (playerHealth > 0) {
        // Lets player know what round they are in
        window.alert("Welcome to Robot Gladiators!  Round " + (i + 1));
        
        // Picks a new enemy robot to fight
        var pickedEnemyName = enemyNames[i];

        // Resets enemy robot Health before starting new fight.
        enemyHealth = 50;
        
        // Use debugger to pause script from running and checks what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }
    // If player isn't alive, stop the game
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}

// Add-ons

// create an option for a player to start a new game after winning the game and display stats after completing a game.
    // create startGame() function to restart the game, and a endGame() function to display playerStats and end the game.

// create a break after a skip or battle victory to allow the player to go to shop and REFILL health, UPGRADE attack or LEAVE the shop
    // create a shop() function to house the shop.

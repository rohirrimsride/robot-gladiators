var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
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

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

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
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before next round?");
                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
            // shop();
        }
        // If player isn't alive, stop the game
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // debugger
    // startGame();
    var endGame = function() {
        window.alert("The game has now ended.  Let's see how you did!");
        // if player is still alive, player wins!
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        } else {
            window.alert("You've lost your robot in battle.");
        }
        // ask player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            // restart the game
            startGame();
        } else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    }
    endGame();

};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {

            window.alert("Refilling player's health by 20 for 7 dollars.");
            // increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            } else {
            window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE":
        case "upgrade":
        if (playerMoney >= 7) {

        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        // increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        } else {
        window.alert("You don't have enough money!");
        }
        break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
}

// start the game when the page loads.
startGame();

// Add-ons

// create an option for a player to start a new game after winning the game and display stats after completing a game.
    // create startGame() function to restart the game, and a endGame() function to display playerStats and end the game.

// create a break after a skip or battle victory to allow the player to go to shop and REFILL health, UPGRADE attack or LEAVE the shop
    // create a shop() function to house the shop.

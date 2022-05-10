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

    while(playerHealth > 0 && enemyHealth > 0) {
    // Alert players we are starting the round
        // window.alert("Welcome to robot Gladiators!");

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

            // if (promptFight === "fight" || promptFight === "FIGHT") {
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
                    break;
                } 
                else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
                }                 
    }// end of while() loop   
};// end of fight function

for(var i=0; i<enemyNames.length; i++ ) {
    // debugger;
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
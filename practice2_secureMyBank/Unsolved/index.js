//Imagine this code manages your bank account. Why is it not safe??

//That's right, your account balance is exposed globally

let accountBalance = 0;
const manageBankAccount = function() {
    return {
        deposit: function(amount) {
            accountBalance += amount;
        },
        withdraw: function(amount) {
            accountBalance -= amount;
        }
    };
}

//What is stopping me from inflating my balance or ruining someone else's?
//Here, later in the script I can:

accountBalance = 10000000;

//Below. Refactor your code with what we learnt today to make your account safer.
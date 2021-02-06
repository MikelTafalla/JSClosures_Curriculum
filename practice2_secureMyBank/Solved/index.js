//let's move accountBalance inside our manager function

const manageBankAccount = function(initialBalance) {

    //Now it is not global anymore
    let accountBalance = initialBalance;
    
    return {
        getBalance: function() { return accountBalance; },
        deposit: function(amount) { accountBalance += amount; },
        withdraw: function(amount) {
            if (amount > accountBalance) {
                return 'You cannot draw that much!';
            }

            accountBalance -= amount;
        }
    };
}

// Notice I can't directly access accountBalance anymore. I can only view it through getBalance, and change it via deposit and withdraw. This is thanks to closures

const accountManager = manageBankAccount(0);

console.log( accountManager.deposit(1000) ); // undefined. nothing to return in the code
console.log( accountManager.withdraw(500) ); // undefined or message depending on amount
console.log( accountManager.getBalance() ); // 500
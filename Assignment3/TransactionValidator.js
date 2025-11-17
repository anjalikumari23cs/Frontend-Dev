const transactions = [
{ id: 1, amount: 2000 },
{ id: 2, amount: -500 },
{ id: 3 },
null
];
for (let i = 0; i < transactions.length; i++) {
    try{
        if (transactions[i] == null) {
            throw new Error(`Transaction at index ${i} is null or undefined.`);
            }
        if (typeof transactions[i].amount !== 'number' || isNaN(transactions[i].amount)) {
            throw new Error(`Transaction at index ${i} has an invalid amount.`);
            }
        if (transactions[i].amount < 0) {
            throw new Error(`Transaction at index ${i} has a negative amount.`);
            }
        console.log(`Transaction ID: ${transactions[i].id}, Amount: $${transactions[i].amount.toFixed(2)}`);
    } catch (error) {
        console.error(`Error processing transaction at index ${i}: ${error.message}`);
          
    }
}
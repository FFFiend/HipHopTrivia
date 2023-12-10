

await session.withTransaction(async () => {
    const subMoneyResults = await accountsCollection.updateOne(
        { _id: account1 },
        { $inc: { balance: amount * -1 }},
        { session}
    );

    if (subMoneyResults.modifiedCount !== 1){
        await session.abortTransaction();
        return;
        
    }
})


// ACID
// Atomicity
// Consistency
// Isolation
// Durability 

// a set of database operations
// leave the database in a valid
// state.
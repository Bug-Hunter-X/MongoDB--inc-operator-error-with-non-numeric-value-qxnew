```javascript
// Correct usage of $inc operator
let incrementValue = 10; // Ensure incrementValue is a number
db.collection.updateOne({"_id":1},{$inc:{counter:incrementValue}});
```
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

var nouse=undefined;
// Serve static files from the public directory (where your index.html is located)
app.use(express.static(path.join(__dirname, 'public')));

//port is 8080 commit new
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

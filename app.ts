// to make this work when working with typescript
// you have to install this: npm install --save-dev @types/node
// this lets typescript know nodejs specific commands and how to translate them into javascript
import express from 'express';

import activitiesRoutes from './routes/activities';

// this lets typescript know express, its functions, classes, objects and it helps intellisense
// npm install --save-dev @types/express
const app = express();

app.use(activitiesRoutes);

app.listen(3000);
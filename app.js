require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");

const mongoose = require("mongoose");
const graphQLSchema = require("./schema");
const graphQLResolvers = require("./resolver");

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true,
  })
);

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((result) => {
    app.listen(port);
    console.log(`Connected to PORT ${port} `);
  })
  .catch((err) => {
    console.log(err);
  });

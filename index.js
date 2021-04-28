const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-2",
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = "product-inventory";
const healthPath = "/health";
const productPath = "/product";
const productsPath = "/products";

exports.handler = async function (event) {};

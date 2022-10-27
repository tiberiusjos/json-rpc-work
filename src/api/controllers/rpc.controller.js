const httpStatus = require('http-status');
const APIError = require('../errors/api-error');
const { JSONRPCServer } = require("json-rpc-2.0");
const wss = require('../../config/wss');

const db = require("../sql-models");
const weighings = db.weighings;
const Op = db.Sequelize.Op;

// JSON-RPC server
const server = new JSONRPCServer();
// First parameter is a method name.
// Second parameter is a method itself.
// A method takes JSON-RPC params and returns a result.
// It can also return a promise of the result.
server.addMethod("push_data", async (params) => {
  console.log('push_data', params);
  // insert data into mysql
  try {
    const data = { ...params };
    const newData = await weighings.create(data);
    console.log("weighing's auto-generated ID:", newData.id);
    wss.clients.forEach( client => {
      client.send("broadcast: spanner " + newData.id + " updated");
    })
    return newData;
  } catch (error) {
    console.log(error)
    return {}
  }
});
server.addMethod("log", ({ message }) => console.log(message));

/**
 * call RPC preocedure
 * @public
 */
exports.callRPC = async (req, res, next) => {
  try {
    const jsonRPCRequest = req.body;
    // server.receive takes a JSON-RPC request and returns a promise of a JSON-RPC response.
    // It can also receive an array of requests, in which case it may return an array of responses.
    // Alternatively, you can use server.receiveJSON, which takes JSON string as is (in this case req.body).
    server.receive(jsonRPCRequest).then((jsonRPCResponse) => {
      if (jsonRPCResponse) {
          console.log(jsonRPCRequest);
          res.json(jsonRPCResponse);
      } else {
          // If response is absent, it was a JSON-RPC notification method.
          // Respond with no content status (204).
          res.sendStatus(204);
      }
  });
  } catch (error) {
      console.log(error);
      return next(204);
  }
};

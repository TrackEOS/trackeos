import React, { Component } from "react";
import { Api, Rpc, SignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
// import axios from "axios";
// import ScatterJS from "scatter-js/dist/scatter.esm";
// import Claim from "../../utils/Claim";
// import AsyncSelect from "react-select/lib/Async";
// import { colourOptions } from "../../utils/data";
// import Search from "./Search";
// import { encrypt, decrypt } from "eos-encrypt";


class Initiate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteTable: [] // to store the table rows from smart contract
    };
    this.handleFormEvent = this.handleFormEvent.bind(this);
  }
  async handleFormEvent(event) {
    // stop default behaviour
    event.preventDefault();
    const endpoint = "http://localhost:7777";
    // collect form data
    let account = event.target.account.value;
    let privateKey = event.target.privateKey.value;

    let firstName = event.target.firstName.value;
    let next = event.target.nextHandler.value;
    let product = event.target.productName.value;
    let productKey = event.target.productKey.value;
    let id = event.target.id.value;
    let description = event.target.description.value;

    // prepare variables for the switch below to send transactions
    let actionName = "";
    let actionData = {};

    // define actionName and action according to event type
    switch (event.type) {
      case "submit":
        actionName = "process";
        actionData = {
          processor: account,
          initialHandler: next,
          productKey : Number(productKey),
          productName : product,
          timestamp:new Date().toLocaleString(),
          processDescription: description,
          id: Number(id)

        };
        break;
      default:
        return;
    }

    // eosjs function call: connect to the blockchain
    const rpc = new Rpc.JsonRpc(endpoint);
    const signatureProvider = new SignatureProvider([privateKey]);
    const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
    try {
      console.log(actionData)
      const result = await api.transact({
        actions: [{
          account: "trackeos",
          name: actionName,
          authorization: [{
            actor: account,
            permission: 'active',
          }],
          data: actionData,
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30,
      });

      console.log(result);
      this.getTable();
    } catch (e) {
      console.log('Caught exception: ' + e);
    }
  }

  // gets table data from the blockchain
  // and saves it into the component state: "noteTable"
  getTable() {
    const endpoint = "http://localhost:7777";
    const rpc = new Rpc.JsonRpc(endpoint);
    rpc.get_table_rows({
      "json": true,
      "code": "trackeos",   // contract who owns the table
      "scope": "trackeos",  // scope of the table
      "table": "procedures",    // name of the table as specified by the contract abi
      "limit": 100,
    }).then(result => console.log(result));
  }

  render() {
    return (
      <section id="initiate" class="initiate">    
      <div class="container">
          <div class="col-sm-8 offset-sm-2 bg-black">
                  <form id="initiateform"  onSubmit={this.handleFormEvent}>
                      
                      <h3 class="text-center">New Product</h3>
                      <div class="form-group">
                        <label for="id">ID:</label>
                        <input type="text" class="form-control" name="id" id="id" />
                        <label for="username">Initiator:</label>
                        <input type="text" class="form-control" name="account" id="username" />
                        <label for="privateKey">Private Key:</label>
                        <input type="text" class="form-control" name="privateKey" id="privateKey" />
                        <div class="form-group form-row">
                          <div class="col-sm-6">
                              <label for="fname">First Name</label>
                              <input type="text" class="form-control" name="firstName" id="fname" />
                          </div>
                          <div class="col-sm-6">
                              <label for="lname">Last Name:</label>
                              <input type="text" class="form-control btn-block" name="lastName" id="lname" />
                          </div>
                      </div>
                        <label for="action">Action:</label>
                        <input type="text" class="form-control" name="description" id="action" />
                        <label for="next">Next Handler:</label>
                        <input type="text" class="form-control" name="nextHandler" id="next" />
                      </div>
                      <div class="form-group">
                        <label for="productName">Product Name:</label>
                        <input type="text" class="form-control" name="productName" id="productName" />
                        <label for="productKey">Product Key:</label>
                        <input type="text" class="form-control" name="productKey" id="productKey" />
                        <label for="productCategory">Category</label>
                        <input type="text" class="form-control" name="category" id="producttCategory" />
                      </div>
                     
                      <button type="submit" class="btn btn-danger btn-block">Submit</button>
                    </form>
          <form>
  
          </form>
          </div>
      </div>
  </section>
  
    );
  }
}
export default Initiate;

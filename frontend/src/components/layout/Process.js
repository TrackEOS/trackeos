import React, { Component } from "react";
import Eos from "eosjs";
// import axios from "axios";
// import ScatterJS from "scatter-js/dist/scatter.esm";
// import Claim from "../../utils/Claim";
// import AsyncSelect from "react-select/lib/Async";
// import { colourOptions } from "../../utils/data";
// import Search from "./Search";
// import { encrypt, decrypt } from "eos-encrypt";


class Process extends Component {
  
  render() {
    return (
      <section id="initiate" class="initiate">    
      <div class="container">
          <div class="col-sm-8 offset-sm-2 bg-black">
                  <form id="initiateform" action="/action_page.php">
                      
                      <h3 class="text-center">Process</h3>
                      <div class="form-group">
                        <label for="username">Processor</label>
                        <input type="text" class="form-control" id="username" />
                        <label for="privateKey">Private Key:</label>
                        <input type="text" class="form-control" id="privateKey" />
                      </div>
                      <div class="form-group">
                        <label for="productName">Product Name:</label>
                        <input type="text" class="form-control" id="productName" />
                        <label for="productCategory">Category</label>
                        <input type="text" class="form-control" id="producttCategory" />
                        <label for="productId">Product ID</label>
                        <input type="text" class="form-control" id="productId" />

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
export default Process;

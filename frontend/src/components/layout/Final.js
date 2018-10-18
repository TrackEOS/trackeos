import React, { Component, Fragment } from 'react';
import { Api, Rpc, SignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
class Final extends Component {
  state = {
    query: '',
    results: [],
    procedures: []
  }

  componentDidMount() {
    this.getTable();
  }

  getTable = () => {
    const endpoint = "http://localhost:7777";
    const rpc = new Rpc.JsonRpc(endpoint);
    rpc.get_table_rows({
      "json": true,
      "code": "trackeos",   // contract who owns the table
      "scope": "trackeos",  // scope of the table
      "table": "procedures",    // name of the table as specified by the contract abi
      "limit": 100,
    }).then(result => {

      this.setState({ procedures: result.rows })


    });
  }


  handleInputChange = () => {

    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 0) {
        if (this.state.query.length > 0) {
          console.log(this.search.value)
          console.log(this.state.procedures)
          let data = this.state.procedures.filter(item => item.productKey == this.search.value)
          console.log(data)
          this.state.results = data;
          console.log(this.state)
        }
      }
    })
  }


  render() {
    return (
      <section id="initiate" class="initiate">
        <div class="container">
          <div class="col-sm-8 offset-sm-2 bg-black">
            <form id="initiateform">

              <h3 class="text-center">Details</h3>
              <div class="form-group">
                <label for="username">Product ID</label>
                <input type="text" class="form-control" ref={input => this.search = input} id="username" name="productKey" onChange={this.handleInputChange} />

              </div>
              <div class="form-group">
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Product#</th>
                      <th scope="col">Product Key</th>
                      <th scope="col">Initial</th>
                      <th scope="col">Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.results.map((item, i) => {
                      return (
                        <Fragment>
                          <tr>

                            <td>{item.productKey}</td>
                            <td>{item.processId}</td>
                            <td>{item.initialHandler}</td>
                            <td>{item.timestamp}</td>
                          </tr>

                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
                products = {JSON.stringify(this.state.results, null, 2)}


              </div>


              <button type="submit" class="btn btn-danger btn-block"
              >Check</button>
            </form>
            <form>

            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Final;

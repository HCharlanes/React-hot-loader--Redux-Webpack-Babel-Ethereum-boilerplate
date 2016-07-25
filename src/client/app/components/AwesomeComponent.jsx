import React from 'react';
var Web3 = require ('web3')

var web3;

console.log("1")
if (typeof web3 !== 'undefined') {
  console.log("2")
  web3 = new Web3(web3.currentProvider);
} else {
  console.log("3")
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log("4")
  console.log(web3.eth.accounts)
}


class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {controledAccount : web3.eth.accounts[0]};
  }


  changeControledAcount (event){
        this.setState({controledAccount: event.target.value.toString()});
     }

  renderAccounts () {
    return (web3.eth.accounts.map((account) => <option> {account} </option> ));
    }


  render() {
    return (
      <div>
      <select onChange ={this.changeControledAcount.bind(this)}>
        {this.renderAccounts()}
      </select>

      </div>
    );
  }

}

export default AwesomeComponent;
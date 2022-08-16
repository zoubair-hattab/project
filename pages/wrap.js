import React, { useState, useEffect } from "react";
import Web3 from "web3";
import abi from "../public/artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";
import abireward from "../public/artifacts/contracts/reword/abi.json"
import abimanager from "../public/artifacts/contracts/Manager.sol/Manager.json"


export default function Wrap() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState("");
  const [epochIds, setEpochIds] = useState([]);

  const web3 = new Web3(window.ethereum);
   const  contract=   new web3.eth.Contract(abi.abi,"0xEa1EC8b55f5aD5f938C0C43c0e39B1CceC6cC9a6");

   console.log(contract.methods)
  useEffect(() => {
    async function init() {
      const chainId = await web3.eth.getChainId();
     
      const _account = await web3.eth.getAccounts();
      setAccount(_account);
      const _balance = await web3.eth.getBalance(_account[0]);
      setBalance(_balance);
    
    }
    init();
  }, [amount]);

  const wrap = async () => {

    await contract.methods.changeDelegations(["0xc9ac8f034d295962a6a975b717b691437605bbb6"],[10000]).send({
      from:account[0],
      gas:300000
    })
/*     await contract.methods.fund().send({
      from:account[0],
      value:amount*10**18,
      gas:300000
    }) */
    

  };
  return (
    <>
      <div
        style={{
          margin: "100px auto",
          width: 400,
          padding: "50px 70px",
          backgroundColor: "yellow",
          textAlign: "center",
        }}
      >
        <div className="">
          <label className="">Wrap</label>
          <div style={{ width: "100%", margin: "15px 0" }}>
            <input
              className=""
              type="text"
              name="amount_wrap"
              placeholder="Amount to wrap"
              onChange={(e) => setAmount(e.target.value)}
            ></input>
            {/* <button className="mr-3">Max</button> */}
          </div>
          <label style={{ margin: "0 10px" }}>
          Available : {balance / 10 ** 18} SGB

          </label>
          <button className="" onClick={wrap}>
            Wrap
          </button>
        </div>
      </div>
    </>
  );
}

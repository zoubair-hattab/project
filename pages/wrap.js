import React, { useState, useEffect } from "react";
import Web3 from "web3";
import abi from "../public/artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";
import abis from "../public/artifacts/contracts/Manager.sol/Manager.json";

//import abi from "../public/artifacts/contracts/wnat/abi.json";

export default function Wrap() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState("");
  const [epochIds, setEpochIds] = useState([]);
  const [provider,setProvider]=useState([]);
  const web3 = new Web3(window.ethereum);
   const  contract=   new web3.eth.Contract(abi.abi,"0x66d6B810904DEa0BA431Aa7Be4B720FEc4d3b01A");
   //const contract1 = new web3.eth.Contract(abis.abi, "0x786Ef989df463483770343717a4F6ae45f18de97");

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
console.log(provider)

  const change = async () => {
     await contract.methods.changeDelegations([provider],[10000])
    .send({
      from: account[0],
     // value: amount * 10 ** 18,
      gas:3000000,
    }) 
 
    
  };

  const wrap = async () => {
    await contract.methods
    .fund()
    .send({
      from: account[0],
      value: amount * 10 ** 18,
      gas:3000000,
    }) 
   

    
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
        {
        account[0]=="0xF9aCD18377157E866B2a888B7fBF5CB7d32F5bDE"? <><label className="">Change Delegation</label>
        <select   onChange={(e) => setProvider(e.target.value)}>
        <option >choose one or all provider </option>
          <option  value="0xc9ac8f034d295962a6a975b717b691437605bbb6">Lena Instrument</option>
        </select>
        <button className="" onClick={change}>
            Change
          </button>
        </>:""
       }
       <br></br>
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

import React, { useState, useEffect } from "react";
import Web3 from "web3";
import abi from "../public/artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";

import abis from "../public/artifacts/contracts/wnat/abi.json";

export default function Wrap() {

  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState("");
  const [epochIds, setEpochIds] = useState([]);

 
   const web3 = new Web3(window.ethereum);
   const contract1 = new web3.eth.Contract(abis, "0xc5738334b972745067fFa666040fdeADc66Cb925");
      const  contract=   new web3.eth.Contract(abi.abi,"0x66d6B810904DEa0BA431Aa7Be4B720FEc4d3b01A");

   useEffect(() => {
    async function init() {
            const chainId = await web3.eth.getChainId();

         var _account = await web3.eth.getAccounts();
      setAccount(_account[0]);
      const _balance = await web3.eth.getBalance(_account[0]);
      setBalance(_balance);
    

      const _epochIds = await contract1.methods
      .getEpochsWithUnclaimedRewards("0x66d6B810904DEa0BA431Aa7Be4B720FEc4d3b01A")
      .call();
      setEpochIds(_epochIds);
       const valss await contract.methods
        .epochsWithUnclaimedStakerReward(_account[0])
        .call() 
 console.log("valss",valss)
     
    }
    init();
  }, [amount]); 
  const wrap = async () => {
     await contract.methods
    .distributeFtsoRewardsToProject(epochIds)
    .send({
      from: _account[0],
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
          Claim Rewards

          </button>
        
        </div>
      </div>
    </>
  );
}

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
   const  contract=   new web3.eth.Contract(abi.abi,"0x9EB1c5ADC803D9Ef9E921062B0866aF90ce00B8C");
   const  contract1=   new web3.eth.Contract(abireward,"0xc5738334b972745067fFa666040fdeADc66Cb925");
   const  contract2=   new web3.eth.Contract(abimanager.abi,"0x13eFbD633570678603d994959f2131d2153A508C");

   console.log(contract.methods)
  useEffect(() => {
    async function init() {
      const chainId = await web3.eth.getChainId();
     
      const _account = await web3.eth.getAccounts();
      setAccount(_account);
      const _balance = await web3.eth.getBalance(_account[0]);
      setBalance(_balance);
      const {..._epochIds} = await contract.methods
     .epochsWithUnclaimedStakerReward (_account[0])
  .call();
    console.log({..._epochIds});
    }
    init();
  }, [amount]);

  const wrap = async () => {

  
  //  console.log(epochIds)
    await contract.methods.distributeFtsoRewardsToProject(epochIds).send({
      from:account[0],
      gas:300000
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
            Wrap
          </button>
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import Web3 from "web3";
import abi from "../public/artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";

import abis from "../public/artifacts/contracts/wnat/abi.json";

export default function Wrap() {

  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState("");
  const [epochIds, setEpochIds] = useState([]);
  const [provider,setProvider]=useState([]);
  const [fee,setFee]=useState([]);
  const [bips,setBips]=useState([]);

  // const  contract2=   new web3.eth.Contract(manager.abi,"0xc3A6Cc6Aef27D7F9BF3706833c6bdB6e37406CD8");
   const contract1 = new Web3.eth.Contract(abis, "0xc5738334b972745067fFa666040fdeADc66Cb925");

   useEffect(() => {
    async function init() {
      const chainId = await web3.eth.getChainId();
     
      const _account = await web3.eth.getAccounts();
      setAccount(_account);
      const _balance = await web3.eth.getBalance(_account[0]);
      setBalance(_balance);

      const _epochIds = await contract1.methods
      .getEpochsWithUnclaimedRewards("0x66d6B810904DEa0BA431Aa7Be4B720FEc4d3b01A")
      .call();
      setEpochIds("epochIds",_epochIds);
     
    }
    init();
  }, [amount]); 

console.log(epochIds)
  const wrap = async () => {

      window.web3 = new Web3(window.ethereum);
      await ethereum.send('eth_requestAccounts');;
      const web3 = window.web3;
      var _account = await web3.eth.getAccounts();
      setAccount(_account[0]);
      const _balance = await web3.eth.getBalance(_account[0]);
      setBalance(_balance);
      const chainId = await web3.eth.getChainId();
if(chainId==19){
      const  contract=   new web3.eth.Contract(abi.abi,"0x66d6B810904DEa0BA431Aa7Be4B720FEc4d3b01A");
     await contract.methods
    .distributeFtsoRewardsToProject(epochIds)
    .send({
      from: _account[0],
      gas:3000000,
    }) 
   
  }
  else{
    console.log("you should be switch you metamask to network Sonbird")
  }
    
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
        <button className="" onClick={setPlatformFeeBips}>
        setPlatformFeeBips
          </button>
          <br/>
          <input type="text" onChange={(e) => setBips(e.target.value)} />
          <br/>
          <br/>
          <button className="" onClick={setPlatformFeeAccount}>
        setPlatformFeeAccount
          </button>
          <br/>
          <input type="text"  onChange={(e) => setFee(e.target.value)}/>
          <br/>
          <br/>

        {
        
        account[0]=="0xC4d34d47b4e20CF1884646f877fA3Fe6192c4B26"? <><label className="">Change Delegation</label>
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
          <br></br>
          <br></br>
          <button className="" onClick={claim}>
          Claim Rewards
          </button>
        </div>
      </div>
    </>
  );
}

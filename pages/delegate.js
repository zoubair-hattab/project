import React, { useState, useEffect } from "react";
import Web3 from "web3";
import abi from "../public/artifacts/contracts/wnat/abi.json";
import { RangeStepInput } from "react-range-step-input";
import BigNumber from "bignumber.js";
import { Link } from "react-router-dom";

export default function Delegate() {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [delegatesPercent, setDelegatesPercent] = useState(0);
  const [delegationInfo, setDelegationInfo] = useState(null);
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, "0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED");
  useEffect(() => {
    async function init() {
      const _account = await web3.eth.getAccounts();
      setAccount(_account);
      if (_account) {
        setAmount(await contract.methods.balanceOf(_account[0]).call());
        const delegate_info = await contract.methods
          .delegatesOf(_account[0])
          .call();
        setDelegationInfo(delegate_info);
      }
    }
    init();
  }, [amount]);

  const delegate = async () => {
    const amount_delegate = BigNumber((amount * delegatesPercent) / 10000);
    await contract.methods
      .delegate(
        "0x153aD30381b11DCE62f349c97a54c2a58956B992",
        delegatesPercent * 100
      )
      .send({
        from: account[0],
      });
  };
  const onChangeSlider = (e) => {
    const newVal = Number(e.target.value);
    setDelegatesPercent(newVal);
  };
  return (
    <>
      <div className="flex flex-col w-1/2 h-auto p-10 mx-10 mx-auto my-10 bg-red-100 border border-collapse border-red-100 rounded-md">
        <label className="m-10 mx-auto text-2xl text-gray-700 md:w-auto">Delegate</label>
        {(delegationInfo && Number(delegationInfo["_count"]) > 1) ||
        (delegationInfo &&
          delegationInfo["_bips"][0] + delegationInfo["_bips"][1] === 10000) ? (
          <label className="mx-auto text-sm text-center text-grey-700 mb-7">
            You have already have max delegation (100% delegated or 2 delegates).<br /><br />
            <Link className="no-underline titlelink" to="/undelegate">Click here to undelegate first...</Link>
          </label>
        ) : (
          <>
            <label className="mx-auto text-6xl text-pink-700 mb-7">
              {delegatesPercent ? delegatesPercent : 0}%
            </label>
            <div className="flex justify-between w-2/3 p-1 pl-3 mx-auto mb-5 border border-collapse border-red-100 rounded-md">
              <RangeStepInput
                className="w-full mx-auto bg-opacity-100"
                min={0}
                max={100}
                value={delegatesPercent ? delegatesPercent : 0}
                step={1}
                onChange={onChangeSlider}
              />
            </div>
            <label className="mx-auto mb-3 text-sm md:w-auto">
              Delegate Address: 0x153aD30381b11DCE62f349c97a54c2a58956B992
            </label>
            <button
              className="w-2/3 p-1 mx-auto my-5 transition duration-500 ease-in-out bg-red-100 border border-collapse border-black h-9 rounded-3xl hover:bg-red-400 hover:text-white hover:border-opacity-0"
              onClick={delegate}
            >
              Delegate{" "}
              {Number(BigNumber((amount * delegatesPercent) / 100)) / 10 ** 18}{" "}
              WSGB to SparkiFi
            </button>
            {/* <p className="mt-5 text-xs italic text-center">Note: If you have already delegated, <NavLink className="transition duration-300 ease-in-out hover:text-red-700 " to="/undelegate">undelegate</NavLink> first</p> */}
          </>
        )}
      </div>
    </>
  );
}
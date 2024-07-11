// import React from 'react'
// import Table from './Table';

// const Market = () => {
//   return (
//     <div className="   bg-[#14161A] ">
//       <h1 className=" text-center  font-bold text-4xl pb-5 pt-5 text-white">
//         CryptoCurrency Price On Market Cap
//       </h1>
//       <span className="flex justify-center pb-2 pt-2  ">
//         <input
//           className=" text-black border w-[80%] h-[3rem] py-2 rounded-md  "
//           type="text"
//           placeholder="Search Crypto Currency"
//         />
//       </span>
//       <div className="   justify-around text-white pt-5 flex border-bottom">
//         <table className="w-[80%]">
//           <tr className="bg-yellow-500 text-black h-14">
//             <th className="w-[35%] text-left pl-7">Coin</th>
//             <th className="w-[25%]">Price</th>
//             <th className="w-[15%]">Change</th>
//             <th className="w-[25%]">Market Cap</th>
//           </tr>

//           <Table />
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Market

import React, { useEffect, useState } from "react";

const Table = () => {
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCrypto(data.coins);
      });
  }, []);
  return (
    <div className="bg-[#14161A]">
      <h1 className=" text-center  font-bold text-4xl pb-5 pt-5 text-white">
        CryptoCurrency Price On Market Cap
      </h1>
      <span className="flex justify-center pb-2 pt-2  ">
        <input
          className=" text-black border w-[80%] h-[3rem] py-2 rounded-md  "
          type="text"
          placeholder="Search Crypto Currency"
        />
      </span>
      <tr className="">
        <table className="w-[80vw] ml-[4rem] lg:ml-[9rem] min-h-[150vh] bg-[#14161A] ">
          <tr className="bg-yellow-500  text-black h-14  ">
            <th className="w-[35%] text-center">Coin</th>
            <th className="w-[25%]">Price</th>
            <th className="w-[15%]">Change</th>
            <th className="w-[25%]">Market Cap</th>
          </tr>
          {crypto?.map((coin) => {
            // console.log(crypto);

            return (
              <>
                <tr className="h-40 border-b w-[90%] text-center ">
                  <td className="text-center pl-[6rem] w-[35%]">
                    <span className="text-left text-white">
                      <img
                        className="h-[60px] w-[60px]"
                        src={coin.item.small}
                      />
                      <h3>{coin.item.symbol}</h3>
                      <p>{coin.item.name}</p>
                    </span>
                  </td>
                  <td className="w-[25%] text-white">{coin.item.data.price}</td>
                  <td className="text-green-700 w-[15%]">
                    +{coin.item.market_cap_rank}
                  </td>
                  <td className="w-[25%] text-white">
                    {coin.item.data.market_cap}
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </tr>
    </div>
  );
};

export default Table;

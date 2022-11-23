export const IndicesData="IndicesData"
export const MostBought="MostBought"
export const TopGainers="TopGainers"
export const Shares ="Shares"
// export const getIndices=()=>{
//     // fetch(`https://fakestoreapi.com/products${categories}`)
//     data=require("../../data/Indices.json")
    
//         {type:IndicesData,payload:data}


//   }

  export const getIndices=()=>{
    data=require("../../data/Indices.json")

    return{
        type:IndicesData,
        payload: data.dataOne
    };

};

export const getMostBought=()=>{
  const dataMostBought=require("../../data/MostBought.json")
  // console.log("moosssssttt",datarMostBought)

  return{
      type:MostBought,
      payload: dataMostBought.dataTwo
 

};}

export const getTopGainers=()=>{
  const dataTopGainers=require("../../data/Topgainer.json")
  // console.log("moosssssttt",datarMostBought)

  return{
      type:TopGainers,
      payload: dataTopGainers.dataThree
 

};}

export const getShares=()=>{
  const dataShares=require("../../data/Shares.json")
  // console.log("moosssssttt",datarMostBought)

  return{
      type:Shares,
      payload: dataShares.dataFour
 

};}



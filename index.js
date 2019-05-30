// add solution here
function theBeatlesPlay (arrMus,arrInst){
  let arr= []
  for (let i=0; i<arrMus.length; i++){
   arr.push(arrMus[i]+ " plays "+ arrInst[i])
  }
  return arr
}
//
//
//
function johnLennonFacts (arrFac){
  let newArr= []
  let i=0
  while(newArr.length<arrFac.length){
    newArr.push(arrFac[i]+ "!!!")
    i++
  }
  return newArr
  }
  //
  //
  //
  function iLoveTheBeatles (num){
    let finalArr=[]
    let count=0
    do{
      finalArr.push("I love the Beatles!")
      count +=1
    }while (count<15)
    return finalArr
  }

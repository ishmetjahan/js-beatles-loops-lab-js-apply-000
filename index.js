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
function johnLennonFacts (arrFac){
  let newStr= ""
  for (let i=0; i<arrFac.length; i++){
    newStr+=(arrFac[i] +"!!!")
  }
  resturn newStr
}
// add solution here
function theBeatlesPlay (arrMus,arrInst){
  let arr= []
  for (let i=0; i<arrMus.length; i++){
   arr.push(arrMus[i]+ " plays "+ arrInst[i])
  }
  return arr
}
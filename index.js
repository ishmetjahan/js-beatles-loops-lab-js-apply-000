// add solution here
function theBeatlesPlay (arrMus,arrInst){
  let arr= []
  for (let i=0; i<arrMus.length; i++){
    for (let j=0; j<arrInst.length; j++){
      let instr= arrInst[j]
      arr.push(`${musican} plays ${instr}`)
    }
  }
  return arr
}
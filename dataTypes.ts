export {}

let flagBool : boolean;
let num : number;
let name : string;
let n : null;
let u : undefined;
name = "Anamika"
console.log(`I am ${name}`)
let list = Array<number>() ;
num = 5
for(let i: number =1; i<=num; i++)
 list.push(i)

 for(num of list)
  console.log("\n",num)

  let multiple: [string, number] = ["abc", 11]

  enum Color  {Red, Blue, Green}
  let c: Color = Color.Blue
  console.log("\n",c)

  let anyDataType : any = 1
  anyDataType = "abc"
  anyDataType = true
  console.log("\n", anyDataType)

  let multiType : number | string
  multiType = 20
  console.log("\n", multiType)
  multiType= "abc"
  console.log("\n", multiType)

  
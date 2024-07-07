// Mehod 1
function multiply (){
    let myArr:number[]= [2,4,6,8]
    let newArr =myArr.map((value2)=>{
        return value2 * 2;
    })    
    console.log("\n Original Array:", myArr);   
    console.log("Modified Array:", newArr)
}
console.log("Mehod 1");
multiply();

// Method 2
function modify(...restParameters:number[]){
    let modifedArray = restParameters.map((rest) =>{
        return rest * 2
    })
    console.log("\n Original Array:" , restParameters);
    console.log("Modified Array:" , modifedArray);    
}
console.log("\n Method 2");
modify(2,4,6,8,10);

// Method 3
function multi(...restParam:number[]){
    let originalArray:number[] =[]
    originalArray.push(...restParam)
    let modification:number[] = []

    for(let i = 0; i < restParam.length; i++){
        modification.push(restParam[i]*2)       
    }
    console.log("\n Origianal Array:" ,originalArray);
    console.log("Modified Array:" , modification);
}
console.log("\n Method 3");
multi(6,7,8,9)

// Method 4
function genNewArr(...para:number[]){
    let parentArray:number[] =[];
    parentArray.push(...para)
    
    let modiArray:number[]=[]
    parentArray.forEach((val1:number)=> modiArray.push(val1 *2));
    
    console.log("\n Originanl Array:", parentArray);
    console.log("Modified Array:" , modiArray);
                
}
console.log("\n Method 4");
genNewArr(10,20,30,40)

// Method 5
let array1:number[]=[]

function multiplication(...value:number[]){
    array1.push(...value);
    let modiArray1:number[]= []
    for(let val of array1){
        modiArray1.push(val * 2)        
    }
    console.log("\n Origianl Array:", array1);
    console.log("Modified Array:", modiArray1);   
}
console.log("\n Method 5");
multiplication(3,5,7,9)

// Method 6

function multi6(...values: number[]) {
    let originalArray: number[] = [...values]; 
    let modifiedArray: number[] = [];

    for (let i = 0; i < originalArray.length; i++) {
        modifiedArray[i] = originalArray[i] * 2;
    }

    console.log("\n Original Array:", originalArray);
    console.log("Modified Array:", modifiedArray);
}
console.log("\n Method 6");
multi6(2, 4, 6, 8);

// Method 7

let array7:number[] =[5,10,15,20];

function multi7(){
    let modiArray2:number[] = []
    modiArray2 = Array.from(array7, val => val * 2)
    
    console.log("\n Original Array:" , array7);    
    console.log("Modified Array:" ,modiArray2);        
}
console.log("\n Method7");

multi7()




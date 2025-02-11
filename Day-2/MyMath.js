const sum=(a,b) => {return a+b;};
const diff=(a,b)=>{return a-b;};
const mult=(a,b)=>{return a*b;};
const div=(a,b)=>{return a/b;};

// For import/export module as object(key-value pair)
const obj ={
    sum: sum,
    diff: diff,
    mult: mult,
    div: div
}

module.exports=obj;

// Import/Export module
// module.exports={sum,diff,mult,div};





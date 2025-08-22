const age=[30,32,33,25,14,18,15,35];
const filterAge=age.filter(chkFun)

function chkFun(age){
    if(age>=18)
        return age;
}

console.log(filterAge);
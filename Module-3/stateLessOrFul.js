//Stateless vs stateful
const add = (amount) =>{
    let count = 0;
    count = count + amount;
    return count;
}

console.log(add(5));
console.log(add(3)); //expected output was total 8, but give 5 and 3

const objectAdd = {
    count : 0,

    add(amount){
       this.count = this.count + amount;    
    },
    
    print(){
        console.log(this.count);
    }
}
objectAdd.add(5);
objectAdd.add(25);
objectAdd.add(50);
objectAdd.print();
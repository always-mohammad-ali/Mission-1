const createCounter = () =>{
    let count = 0;

    return (amount) =>{
        count = count + amount;
        return count;
    };
};

const counter = createCounter();

console.log(counter(50));
console.log(counter(21));

// instead we will use object for stateful related operation
//in addition, we also use class, constructor, and method for here for completing this stateful matter

class StateCounter{
    constructor(count){
        this.count = count;

    }

    add(amount){
        this.count += amount;
    }
    print(){
        console.log(this.count);
    }
}

const counter1 = new StateCounter(10);
counter1.add(2000);
counter1.print();

const counter2 = new StateCounter(0);
counter2.add(35);
counter2.add(15);
counter2.print();
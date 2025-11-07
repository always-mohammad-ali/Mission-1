class Stack{
    constructor(){
        this.items = [];
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.pop();
    }
    peek(){
       if(this.isEmpty()){
         return undefined;
       }
       return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    print(){
        console.log(this.items.slice().reverse().join(" --> "));
    }
}

const stack1 = new Stack();
console.log(stack1.isEmpty());

console.log(stack1.peek());

stack1.push(50);
stack1.push(100);
stack1.push(400);

stack1.print();

console.log(stack1.pop());
console.log(stack1.peek());
// ARRAY QUEUE IMPLEMENTATION
class Queue{
    constructor(){
        this.lists = [];
    }
    
    // O(1)
    enqueue(value){
       return this.lists.push(value);
    }
    //O(n)
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.lists.shift();
    }
    // O(1)
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.lists[0];
    }
    //O(1)
    isEmpty(){
        return this.lists.length === 0;
    }
    //O(n)
    print(){
        console.log("Start --> ", this.lists.join(" --> "), " --> end");
    }
}

const queue1 = new Queue();
queue1.enqueue(54);
queue1.enqueue(80);
queue1.enqueue(200);
queue1.print();

console.log("Peek value -> ", queue1.peek());
console.log("Pop value -> ", queue1.dequeue());

console.log("After shift/pop value from that array : ")
queue1.print();
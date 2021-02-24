class SLL{
    constructor(){
        this.head = null
    }
    addFront(value){
        var new_node = new Node(value)
        new_node.next = this.head
        this.head = new_node
        return this.head
    }
    removeFront(){
        this.head = this.head.next
        return this.head
    }
    front(){
        return this.head.value
    }
    view(){
        var runner = this.head;
        while(runner){
            console.log(`Value: ${runner.value}`)
            runner = runner.next
        }
    }
    contains(value){
        var runner = this.head;
        while(runner){
            if(runner.value === value){
                return true
            }
            runner = runner.next
        }
        return false
    }
}


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

new_SLL = new SLL()
new_Node = new Node(10)
new_SLL.head = new_Node
new_SLL.addFront(2)
new_SLL.addFront(4)
new_SLL.addFront(6)
new_SLL.view()
new_SLL.removeFront()
console.log("")
new_SLL.view()
console.log(new_SLL.front())
console.log(new_SLL.contains(14))

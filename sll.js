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

    length(){
        var len = 0
        var runner = this.head;
        while(runner){
            len++;
            runner = runner.next
        }
        return len
    }

    display(){
        var arr = []
        var runner = this.head;
        while(runner){
            arr.push(runner.value)
            runner = runner.next
            
        }
        return arr        
    }

    max(){
        var runner = this.head
        var max = runner.value
        while(runner){
            if(runner.value > max){
                max = runner.value
            }
            runner = runner.next
        }
        return max
    }

    min(){
        var runner = this.head
        var min = runner.value
        while(runner){
            if(runner.value < min){
                min = runner.value
            }
            runner = runner.next
        }
        return min
    }
    average(){
        var running_sum = 0
        var runner = this.head
        while(runner){
            running_sum += runner.value
            runner = runner.next
        }
        return running_sum/this.length()
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
console.log("")
// new_SLL.view()
// console.log(new_SLL.front())
// console.log(new_SLL.contains(14))
// console.log(new_SLL.length())
// console.log(new_SLL.display())
console.log(new_SLL.max())
console.log(new_SLL.min())
console.log(new_SLL.average())

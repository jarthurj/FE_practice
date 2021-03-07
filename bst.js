class BST{
    constructor(){
        this.root = null
    }
    add(val){
        var runner = this.root
        if(runner === null){
            this.root = new BTNode(val)
        }
        while(runner){
            if (runner.value >= val){
                if(runner.left === null){
                    runner.left = new BTNode(val)
                    break
                }
                runner = runner.left
            } 
            else{                
                if(runner.right === null){
                    runner.right = new BTNode(val)
                    break
                }
                runner = runner.right
            }

        }
    }
    contains(val,node = this.root){
        if(node === null){
            return false
        }
        if(node.value === val){
            return true
        } 
        else if(node.value <= val){
            return this.contains(node.left,val)
        }
        else if(node.value > val){
            return this.contains(node.right,val)
        }
    }
    min(){
        var min = this.root.value
        var runner = this.root
        while(runner){
            if(runner.value <= min){
                min = runner.value
                runner = runner.left
            }
        }
        return min
    }
    max(){
        var max = this.root.value
        var runner = this.root
        while(runner){
            if(runner.value >= max){
                max = runner.value
                runner = runner.right
            }
        }
        return max
    }
    size(){
        if(this.root === null){
            return 0
        }  
        function helper(runner){
            if(!runner){
                return 0
            }
            return 1 + helper(runner.left) + helper(runner.right)
        }
        return helper(this.root)
    }
    isEmpty(){
        if(this.root === null){
            return true
        }
        return false
    }
}

class BTNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
var new_bst = new BST()
var new_node = new BTNode(6)
new_bst.root = new_node

new_bst.add(10)
new_bst.add(12)
new_bst.add(5)
new_bst.add(20)
new_bst.add(4)
// console.log(new_bst.contains(6))
// console.log(new_bst.min())
// console.log(new_bst.max())
console.log(new_bst.size())
// console.log(new_bst.isEmpty())
// BST: Add
// Create an add(val) method on the BST object to add new value to the tree. 
// This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. 
// Unless specified otherwise, BSTs can contain duplicate values.



// BST: Contains
// Create a contains(val) method on BST that returns whether the tree contains a given value. 
// Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.



// BST: Min
// Create a min() method on the BST class that returns the smallest value found in the BST.



// BST: Max
// Create a max() BST method that returns the largest value contained in the binary search tree.



// BST: Size
// Write a size() method that returns the number of nodes (values) contained in the tree.



// BST: Is Empty
// Create an isEmpt
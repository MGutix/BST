class Node {
    constructor(data){
        this.left = null
        this.data = data
        this.right = null
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

class Tree {
    constructor(arr){
        this.node = this.buildTree(arr, 0, arr.length-1)
        prettyPrint(this.node)
    }

    buildTree(arr,start, end){

        if (start > end){
            return null;
        }
        
        let mid = parseInt((start + end)/2)
        let node = new Node(arr[mid])
    
        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);
    
        return node
    }
}


const arr = [1, 2, 3, 4, 5, 6, 7];

balancedBST = new Tree(arr, 0, arr.length - 1);
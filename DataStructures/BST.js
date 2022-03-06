class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(root = null) {
        this.root = root;
    }

    search(value, current = this.root) {
        // the value is at root
        if (this.root.data == value) {
            return this.root;
        }

        if (value < current.data) {

            if (current.left === null) {
                console.log(current)
                return null;
            }

            if (current.left.data == value) {
                console.log(current.left.data)
                return current.left;
            }

            return this.search(value, current.left)
        }
        else if (value >= current.data) {
            if (current.right == null)
                return null;
            if (current.right.data == value) {
                return current.right;
            }
            return this.search(value, current.right)
        }

    }

    insert(tempNode, current = this.root) {
        // if the tree doesn't have a root
        if (this.root == null) {
            this.root = tempNode;
            return;
        }
        // if the node is less than current - go left
        if (tempNode.data < current.data) {
            if (current.left == null) {
                current.left = tempNode;
                return;
            }
            this.insert(tempNode, current.left)
        }
        // else go right
        else {
            if (current.right == null) {
                current.right = tempNode;
                return;
            }
            this.insert(tempNode, current.right)
        }
    }

    delete(value, current = this.root) {
        // the value is at root
        if (this.root.data == value) {
            return this.root;
        }

        if (value < current.data) {

            if (current.left === null) {
                console.log(current)
                return null;
            }

            if (current.left.data == value) {
                console.log(current.left.data)
                return current.left;
            }

            return this.search(value, current.left)
        }
        else if (value >= current.data) {
            if (current.right == null)
                return null;
                
            if (current.right.data == value) {
                return current.right;
            }
            return this.search(value, current.right)
        }

    }
}


let temp1 = new Node(10);
let temp2 = new Node(5);
let temp3 = new Node(11);
let temp4 = new Node(4);
let tree = new BST(temp1);
tree.insert(temp2);
tree.insert(temp3);
tree.insert(temp4);

console.log(tree.search(9))
// console.log(tree.root);

package DataStructures.BinaryTree;

class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
    }
}

class BinarySearchTree {
    Node root;

    BinarySearchTree(Node root) {
        this.root = root;
    }

    void insert(Node newNode, Node current) {

        if(this.root == null) {
            newNode = this.root;
        }

        else if (newNode.data < current.data) {
            if(current.left == null) {
                current.left = newNode;
                return;
            }
            
            this.insert(newNode, current.left);
        }
        else {
            if(current.right == null) {
                current.right = newNode;
                return;
            }
            
            this.insert(newNode, current.right);

        }
    }

    boolean search (int num, Node current) {

        if(current.data == num) {
            return true;
        }

        else if (num < current.data) {
            if(current.left == null) {
                return false;
            }
            
            this.search(num, current.left);
        }
        else {
            if(current.right == null) {
                return false;
            }
            
            this.search(num, current.right);
        }

        return false;
    }
}

public class BST {
    public static void main(String[] args) {
        
    }
    
}

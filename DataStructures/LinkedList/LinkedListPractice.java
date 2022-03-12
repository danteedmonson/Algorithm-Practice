package DataStructures.LinkedList;

class Node {

    int data;
    Node next = null;

    Node(int data) {
        this.data = data;
    }
}

class LinkedList {
    Node head;

    LinkedList(Node head) {
        this.head = head;
    }

    void insertFront(Node newNode) {
        newNode.next = this.head;
        this.head = newNode;
    }

    void insertBack(Node newNode) {
        Node temp = this.head;
        while(temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    void insertAt(Node newNode, int index) {
        Node temp = this.head;

        // find spot before entry
        for (int i=0; i<index-1; i++) {
            if(temp.next == null) {
                break;
            }
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;

    }

    void printList() {
        Node temp = this.head;

        while(temp != null) {
            System.out.printf("%d -> ", temp.data);
            temp = temp.next;
        }

    }

}

public class LinkedListPractice {
    public static void main(String[] args) {
        Node hello = new Node(5);
        LinkedList myList = new LinkedList(hello);
        myList.insertFront(new Node(3));
        myList.insertBack(new Node(54));
        myList.insertAt(new Node(6), 20);
        myList.printList();
    }
}

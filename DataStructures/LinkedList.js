class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    insertFront(temp) {
        temp.next = this.head;
        this.head = temp;
    }

    insertBack(temp) {
        if (this.head == null) {
            this.head = temp;
            return;
        }

        let current = this.head;
        while (current !== null) {
            if (current.next == null) {
                current.next = temp;
                return;
            }
            current = current.next;
        }
    }

    insertAt(temp, index) {
        if (index == 0) {
            temp.next = this.head;
            this.head = temp;
            return;
        }
        
        let current = this.head;
        for(let i = 1; i < index; i++) {
            current = current.next;
        }

        temp.next = current.next;
        current.next = temp;
    }

}


let temp = new Node(5);
let temp2 = new Node(4);
let temp3 = new Node(6)
let temp4 = new Node(8)
let temp5 = new Node(9)
temp.next = temp2;

let list = new LinkedList(temp);
list.insertFront(temp3);
list.insertBack(temp4);
list.insertAt(temp5, 2)
console.log(list.head.next.next);


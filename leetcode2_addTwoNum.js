// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example
//     Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//     Output: 7 -> 0 -> 8
//     Explanation: 342 + 465 = 807.

var ListNode = function(val) {
    this.val = val;
    this.next = null;
    return this;
};

function LinkedList(item) {
    this.head = new ListNode(item);
    this.find = find;
    this.add = add;
    this.insert = insert;                     
    this.remove = remove;
    this.findPre = findPre;
    this.display = display;
    this.displayString = displayString;
    return this;
}

//链表查找
/**
 * 
 * @param {any} item
 */
function find(item) {
    var currentNode = this.head;
    while(currentNode.val !== item) {
        currentNode = currentNode.next;
        if(currentNode.next === null) {
            return null;
        }
    }
    return currentNode;
}

//添加元素
/**
 * 
 * @param {any} iterm 
 */
function add(iterm) {
    var currentNode = this.head,
    newNode = ListNode(iterm);
    while(currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
}

//链表插入
/**
 * 
 * @param {any} newElement
 * @param {any} item
 */
function insert(newElement, item) {
    var newNode = ListNode(newElement);
    var target = this.find(item);
    if(target === null) {
        console.log("Insert error!");
    }
    newNode.next = target.next;
    target.next = newNode;
}

function remove(item) {
    var preNode = this.findPre(item);
    if(preNode.next !== null) {
        preNode.next = preNode.next.next;
    }
}

function findPre(item) {
    var currentNode = this.head;
    while(!( currentNode.next == null) && ( currentNode.next.val != item )) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function display() {
    var currentNode = this.head;
    while ( currentNode.next !== null ){
        console.log( currentNode.next.element + "->");
        currentNode = currentNode.next;
    }
}

function displayString() {

}

 /**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
};

var list = LinkedList(2);
list.add(4);
list.add(5);
console.log(list.head.next.val);

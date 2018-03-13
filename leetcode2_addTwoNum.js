// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//Node Constructor
var ListNode = function(val) {
    this.val = val;
    this.next = null;
};

//Constructor
function LinkedList(item) {
    this.head = new ListNode(item);
    this.find = find;
    this.add = add;
    this.insert = insert;                     
    this.remove = remove;
    this.findPre = findPre;
    this.display = display;
    this.displayString = displayString;
}

var list = new LinkedList(1);

//链表查找
/**
 * 
 * @param {number} item
 */
function find(item) {
    var currentNode = this.head;
    while(currentNode.val !== item) {
        if(currentNode.next === null) {
            return null;
        }
        currentNode = currentNode.next;
    }
    return currentNode;
}

//添加元素
/**
 * 
 * @param {number} iterm 
 */
function add(iterm) {
    var currentNode = this.head,
    newNode = new ListNode(iterm);
    while(currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
}

//链表插入
/**
 * 
 * @param {number} newElement
 * @param {number} item
 */
function insert(newElement, item) {
    var newNode = new ListNode(newElement);
    var target = this.find(item);
    if(target === null) {
        console.log("Insert error!");
    }
    newNode.next = target.next;
    target.next = newNode;
}

//链表删除
/**
 * 
 * @param {number} item 
 */
function remove(item) {
    var preNode = this.findPre(item);
    if(preNode.next !== null) {
        preNode.next = preNode.next.next;
    }
}

//查找链表前一节点
function findPre(item) {
    var currentNode = this.head;
    while(!( currentNode.next == null) && ( currentNode.next.val != item )) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

//打印链表
function display() {
    var currentNode = this.head;
    var printStr = currentNode.val.toString();
    while ( currentNode.next !== null ){
        printStr += ("->" + currentNode.next.val.toString());
        currentNode = currentNode.next;
    }
    console.log(printStr);
}

function displayString() {
    var currentNode = this.head;
    var printStr = currentNode.val.toString();
    while ( currentNode.next !== null ){
        printStr += ("->" + currentNode.next.val.toString());
        currentNode = currentNode.next;
    }
    return printStr;
}

// Example
//     Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//     Output: 7 -> 0 -> 8
//     Explanation: 342 + 465 = 807.

 /**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var list = new ListNode(0);
    var result = list;
    var sum, carry = 0;
    while(l1 || l2 || carry) {
        sum = 0;
        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null ) {
             sum += l2.val;
             l2 = l2.next;
        }

        sum += carry;
        list.next = new ListNode(sum % 10);
        carry = parseInt(sum / 10);
        list = list.next;
    }
    return result.next;
};
var l1 = new LinkedList(2),
    l2 = new LinkedList(5);
l1.add(4);
l1.add(3);
l2.add(6);
l2.add(4);
console.log(l1.head, l2.head);
console.log(addTwoNumbers(l1.head, l2.head));
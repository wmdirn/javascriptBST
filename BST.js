class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 

class BinarySearchTree 
{ 
    constructor() { 
      this.root = null; 
      this.countLR = 0;
      this.lheight = 0;
      this.rheight = 0;
    } 

    insert(data) { 
      var newNode = new Node(data); 
      if(this.root === null) 
        this.root = newNode; 
      else
        this.insertNode(this.root, newNode); 
    } 

    insertNode(node, newNode) { 
      if(newNode.data < node.data && newNode.data !== null) { 
        if(node.left === null) 
          node.left = newNode; 
        else
          this.insertNode(node.left, newNode);  
      } 
      else { 
        if(node.right === null) 
            node.right = newNode; 
        else
          this.insertNode(node.right,newNode); 
      } 
    } 

    remove(data) { 
      this.root = this.removeNode(this.root, data); 
    }   

    removeNode(node, key) { 
      if(node === null) 
        return null; 
      else if(key < node.data)  { 
        node.left = this.removeNode(node.left, key); 
        return node; 
      } 
      else if(key > node.data) { 
        node.right = this.removeNode(node.right, key); 
        return node; 
      } 
      else { 
        if(node.left === null && node.right === null) 
        { 
            node = null; 
            return node; 
        } 
        if(node.left === null) 
        { 
            node = node.right; 
            return node; 
        } 
          
        else if(node.right === null) 
        { 
            node = node.left; 
            return node; 
        } 
        var aux = this.findMinNode(node.right); 
        node.data = aux.data; 
  
        node.right = this.removeNode(node.right, aux.data); 
        return node; 
      } 
    }  

    printLevelOrder(node) {
      var h = this.height(node)
      for (var i=1;i<h+1;i++) {
        this.printGivenLevel(node,i);
      } 
    }

    printGivenLevel(node,level) {
      if (node === null) { 
        return;
      } 
      if (level===1) {
        console.log(node.data);
      } else {
        if (level > 1) {
          this.printGivenLevel(node.left,level-1);
          this.printGivenLevel(node.right,level-1);
        }
      }
    }

    height(node) {
      if (node === null) { 
        return 0;
      } else {
        this.lheight = this.height(node.left);
        this.rheight = this.height(node.right);
        if (this.lheight > this.rheight)  {
          return this.lheight+1;
        } else {
          return this.rheight+1;
        }
      }
    }

    inorder(node) { 
      if(node !== null) { 
        this.inorder(node.left); 
        console.log(node.data); 
        this.inorder(node.right); 
      } 
    } 

    inorderLR(node,L,R) { 
      if(node !== null) { 
        this.inorderLR(node.left,L,R); 
        if (node.data>=L && node.data<=R) {
          this.countLR += node.data;
          console.log(node.data);
        }
        this.inorderLR(node.right,L,R); 
      } 
    } 

    postorder(node) { 
      if(node !== null) { 
        this.postorder(node.left); 
        this.postorder(node.right); 
        console.log(node.data); 
      } 
    } 

    preorder(node) { 
      if(node !== null) { 
        console.log(node.data); 
        this.preorder(node.left); 
        this.preorder(node.right); 
      } 
    } 

    findMinNode(node) { 
      if(node.left === null) 
        return node; 
      else
        return this.findMinNode(node.left); 
    } 
    
    getRootNode() { 
      return this.root; 
    } 

    search(node, data) { 
      if(node === null) 
        return null; 
      else if(data < node.data) 
        return this.search(node.left, data); 
      else if(data > node.data) 
        return this.search(node.right, data); 
      else
        return node; 
    }
} 
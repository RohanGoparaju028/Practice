class AVLNode {
  data:number;
  left:AVLNode|null;
  right:AVLNode|null;
  ht:number;
  constructor(value:number) {
    this.data = value;
    this.left = null;
    this.right = null;
    this.ht = 1;
  }
}
type AVL = AVLNode|null;
class AVLTree {
  root:AVL;
  constructor() {
    this.root = null;
  }
  Height(node:AVL) : number {
    return node? node.ht : 0;
  }
  updateHt(node:AVLNode) : void {
    node.ht = 1 + Math.max(this.Height(node.left),this.Height(node.right));
  }
  balanceFactor(node:AVL) : number {
    return this.Height(node!!.left) - this.Height(node!!.right);
  }
  rotateRight(y:AVLNode) : AVLNode {
      let x = y.left as AVLNode;
      let t1 = x.right;
      x.right = y;
     y.left= t1;
     this.updateHt(x);
     this.updateHt(y);
     return x;
  }
  leftRotate(y:AVLNode) : AVLNode {
    let x = y.right as AVLNode;
    let t1 = x.left;
    x.left = y;
    y.right = t1;
    this.updateHt(x);
    this.updateHt(y);
    return x;
}
insert(val:number) : void {
  this.root = this.insertNode(this.root,val);
} 
insertNode(node:AVL,val:number) : AVL {
  if(node === null) {
    return new AVLNode(val);
  }
  if(val === node!.data) {
     throw Error("The node already exist in the AVL tree");
  }
  if(val < node.data) {
    return this.insertNode(node.left,val);
  }
  else if(node.data < val) {
    return this.insertNode(node.right,val);
  }
  this.updateHt(node!!);
  const b = this.balanceFactor(node);
  if(b > 1 && val < node.left!.data) {
    return this.rotateRight(node);
  }
  if(b < -1 && val > node.right!.data) {
    return this.leftRotate(node);
  }
  if(b > 1 && val > node.left!.data) {
    node.left = this.leftRotate(node.left!);
    return this.rotateRight(node);
  }
  if(b<-1 && val < node.right!.data){
    node.right = this.rotateRight(node.right!);
    return this.leftRotate(node);
  }
  return node;
}
search(val:number) : boolean {
  return this.searchNode(this.root,val);
}
searchNode(node:AVL,val:number) : boolean {
  if(node === null) {
    return false;
  }
  if(node.data  === val) {
    return true;
  }
  if(node.data > val) {
    return this.searchNode(node.left,val);
  }
  else{
    return this.searchNode(node.right,val);
  }
}
}
function main():void {
const obj:AVLTree = new AVLTree();
obj.insert(5);
obj.insert(7);
obj.insert(3);
obj.insert(4);
obj.insert(6);
console.log(obj.search(7));
}
main();

function isTreeSymmetric(t) {
  if (t == null) return true;
  if (t.left == null || t.right == null) return false;
  let leftStack = [];
  let rightStack = [];
  
  fillStack = (stack, node, flag) => {
      if (node == null) {
          stack.push(null);
          return;
      }
      if (node.left == null && node.right == null) {
          stack.push(node.value);
          return;
      }
      stack.push(node.value);    
      if(flag) {
          fillStack(stack, node.left, flag);
          fillStack(stack, node.right, flag);
      } else {
          fillStack(stack, node.right, flag);
          fillStack(stack, node.left, flag);
      }
  }
  
  fillStack(leftStack, t.left, true);
  fillStack(rightStack, t.right, false);
  
  while (leftStack.length > 0 && rightStack.length > 0) {
      if (leftStack.pop() !== rightStack.pop()) {
          return false;
      }
  }
  
  return leftStack.length === rightStack.length;
}

function isTreeSymmetric(t) {
  if (t == null) return true;
  compareNodes = (left, right) => {
      if (left == null && right == null) {
          return true;
      }
      if (left == null || right == null) {
          return false;
      }
      if (left.value !== right.value) {
          return false;
      }
      return compareNodes(left.left, right.right) && compareNodes(left.right, right.left);
  }
  
  return compareNodes(t.left, t.right);
}


function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
let root = new Tree(1);

root.left = new Tree(2);
root.left.right = new Tree(3);
root.right = new Tree(2);
root.right.right = new Tree(3);


isTreeSymmetric(root);
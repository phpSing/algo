var createFiber = function (tag, key) {
  var fiber = {
    // Instance
    key: key,
    type: null,
    stateNode: null,
    // ...

    // Fiber
    return: null,
    sibling: null,
    child: null,
    pendingProps: null,
    memoizedProps: null,
    updateQueue: null,
    // ...
  };
  // ...
  return fiber;
};
// stateNode：一个对组件、DOM 节点或其他 React element 类型实例的引用；
// return：父 fiber node；
// sibling：下一个兄弟 fiber node；
// child：子 fiber node；
// pendingProps：已完成 reconciliation 更新的等待传入子组件或刷新 DOM 的 props；
// memoizedProps：在上一个渲染期间用于输出的 props；
// updateQueue：一个存储 state 更新、回调函数和 DOM 更新的队列。

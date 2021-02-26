// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

class LazyManMock {
  constructor(name) {
    this.name = name;
    this.queue = [];
    console.log(name);
    setTimeout(() => {
      this.runTask();
    }, 0);
  }

  addTask(task) {
    this.queue.push(task);
  }

  runTask() {
    const task = this.queue.shift();
    task && task();
  }

  sleep(time) {
    // sleep for time
    setTimeout(() => {
      console.log("Wake up after" + time);
      this.runTask();
    }, time * 1000);
    return this;
  }

  eat(foodname) {
    this.addTask(() => {
      console.log("eat " + foodname);
      this.runTask();
    });
    return this;
  }
}

function lm(name) {
  return new LazyManMock(name);
}

// lm("Hank");
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// lm("Hank").sleep(10).eat("dinner");
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

lm("Hank").eat("Dinner").eat("Supper");
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
// 以此类推。

class _LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.tasks.push(task);
    setTimeout(() => {
      // 把 this.next() 放到调用栈清空之后执行
      this.next();
    }, 0);
  }

  next() {
    const task = this.tasks.shift(); // 取第一个任务执行
    task && task();
  }

  sleep(time) {
    this._sleepWrapper(time, false);
    return this; // 链式调用
  }

  sleepFirst(time) {
    this._sleepWrapper(time, true);
    return this;
  }

  _sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    if (first) {
      this.tasks.unshift(task); // 放到任务队列顶部
    } else {
      this.tasks.push(task); // 放到任务队列尾部
    }
  }

  eat(name) {
    const task = () => {
      console.log(`Eat ${name}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}

function LazyMan(name) {
  return new _LazyMan(name);
}

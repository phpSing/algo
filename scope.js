var a = {
  b: function () {
    console.log(this); // a
  },
};

function a() {
  console.log(this); // window
}
a();

A = function () {
  console.log(this);
};
A(); // window
var aa = new A(); // function A

document.body.onclick = function () {
  console.log(this); // body element
};

function a() {
  alert(this); // window, null => window
}
a.call(null);

var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();

var a = 10;
(function () {
  console.log(a);
  a = 5;
  console.log(window.a);
  var a = 20;
  console.log(a);
})();

GO {
  a: 10
}
AO {
  a: 20
}
undefined
10
20

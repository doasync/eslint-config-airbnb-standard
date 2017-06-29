import {Component} from 'react'

export class Greeter {
  constructor (message) {
    this.greeting = message;
  }

  greetFrom (...names) {
    let suffix = names.reduce((s, n) => s + ", " + n.toUpperCase());
    return "Hello, " + this.greeting + " from " + suffix;
  }

  greetNTimes ({name, times}) {
    let greeting = this.greetFrom(name);
    for (let i = 0; i < times; i++) {
      console.log(greeting)
    }
  }
}

new Greeter("foo").greetNTimes({name: "Webstorm", times: 3})


function foo (x, y, z) {
  var i = 0;
  var x = {0: "zero", 1: "one"};
  var a = [0, 1, 2];
  var foo = function () {
  }
  var asyncFoo = async (x, y, z) => {
  }
  var v = x.map(s => s.length);
  if (!i > 10) {
    for (var j = 0; j < 10; j++) {
      switch (j) {
        case 0:
          value = "zero";
          break;
        case 1:
          value = "one";
          break;
      }
      var c = j > 5 ? "GT 5" : "LE 5";
    }
  } else {
    var j = 0;
    try {
      while (j < 10) {
        if (i == j || j > 5) {
          a[j] = i + j * 12;
        }
        i = (j << 2) & 4;
        j++;
      }
      do {
        j--;
      } while (j > 0)
    } catch (e) {
      alert("Failure: " + e.message);
    } finally {
      reset(a, i);
    }
  }
}

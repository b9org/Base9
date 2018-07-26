function true_f() {
    return 1
}

function test_return_true() {
    return true_f();
}

function false_f() {
    return 0;
}

function test_return_false() {
    var a = false_f();
    if (a == 0) {
        return 1;
    }
    return 0;
}

function test_add() {
    var a = 1;
    var b = 2;
    if ((a + b) == 3) {
        return 1;
    }
    return 0;
}

function test_sub() {
    var a = 9;
    var b = 5;
    if ((a - b) == 4) {
        return 1;
    }
    return 0;
}

function test_mul() {
  var a = 4;
  var b = 6;
  if ((a * b) == 24) {
    return 1;
  }
  return 0;
}

function test_div() {
  var a = 24;
  var b = 6;
  if ((a / b) == 4) {
    return 1;
  }
  return 0;
}

function test_not() {
    if (!0 == 1) {
        return 1;
    }
    if (!1 == 0) {
        return 1;
    }
    if (!2 == 0) {
        return 1;
    }
    return 0;
}


// test equal, test the true and the false case
function test_equal() {
    var a = 1;
    if(a == 1) {
        return 1;
    }
    return 0;
}

function test_equal_1() {
    var a = 1;
    if(a == 2) {
        return 0;
    }
    return 1;
}

function test_greaterThan() {
    var a = 1;
    if(a > 0) {
        return 1;
    }
    return 0;
}

function test_greaterThan_1() {
    var a = 1;
    if(a > 1) {
        return 0;
    }
    return 1;
}

function test_greaterThanOrEqual() {
    var a = 1;
    if(a >= 1) {
        return 1;
    }
    return 0;
}

function test_greaterThanOrEqual_1() {
    var a = 2;
    if(a >= 1) {
        return 1;
    }
    return 0;
}

function test_greaterThanOrEqual_2() {
    var a = 0;
    if(a >= 1) {
        return 0;
    }
    return 1;
}

function test_lessThan() {
    var a = 1;
    if(a < 2) {
        return 1;
    }
    return 0;
}

function test_lessThan_1() {
    var a = 1;
    if(a < 1) {
        return 0;
    }
    return 1;
}

function test_lessThan_2() {
    var a = -1;
    if(a < 0) {
        return 1;
    }
    return 0;
}

function test_lessThan_3() {
    var a = -1;
    if(a < 0) {
        return 1;
    }
    return 0;
}

function test_lessThanOrEqual() {
    var a = 1;
    if(a <= 2) {
        return 1;
    }
    return 0;
}

function test_lessThanOrEqual_1() {
    var a = 2;
    if(a <= 2) {
        return 1;
    }
    return 0;
}


function helper_c(c) {
    return c+3;
}

function helper_a(a) {
    a = helper_c(helper_b(a));
    return a;
}

function helper_b(b) {
    return b+1;
}

function test_call() {
    if (helper_a(3) == 7) {
        return 1;
    }
    return 0;
}

/* String Tests */

function test_string_declare_string_var() {
    var a = "this is a string"
    return 1;
}

function helper_test_string_pass_string_argument(a) {
    return 1;
}

function test_string_pass_string_argument() {
    var a = "hi"
    if (1 != helper_test_string_pass_string_argument(a)) {
        return 0;
    }
    if (1 != helper_test_string_pass_string_argument("mom")) {
        return 0;
    }
    return 1;
}

function helper_test_string_return_string() {
    return "Hi"
}

function test_string_return_string() {
    var a = helper_test_string_return_string();
    if (a == "Hi") {
        return 1;
    }
    return 0;
}

function test_while() {
    var a = 0;
    var c = 10;
    while (c > 0) {
        a++;
        c--;
    }
    if (c != 0) {
        return 0;
    }
    if (a != 10) {
        return 0;
    }
    return 1;
}

function test_for_never_run_body() {
    for (var x = 0; x != 0; x++) {
        return 0;
    }
    return 1;
}

function test_for_sum() {
    var sum = 0;
    for (var x = 0; x < 4; x++) {
        sum += x;
    }

    if (sum != 6) {
        return 0;
    }
    return 1;
}

b9PrintString("This is the interpreter test suite - to run, run ./test/b9test");

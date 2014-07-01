/*jslint strict: true, white: true, sub: true, onevar: true, undef: true, eqeqeq: true, newcap: true, immed: true, */

$(document).ready(function() {
  $("input").on("keyup", onInput);
});

var defaultHelper = {
  "someKey": "someValue"
};

$("#json").append(JSON.stringify(defaultHelper, undefined, 2));


var onInput = function() {
  var formInputs = {};
  $.each($("form").serializeArray(), function() {
    if (this.value === "") {
      console.log("skip!");
    } else {
      formInputs[this.name] = this.value;
    }
  });

  $("#json").html(JSON.stringify(formInputs, undefined, 2));
};

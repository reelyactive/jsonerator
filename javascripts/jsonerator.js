/*jslint strict: true, white: true, sub: true, onevar: true, undef: true, eqeqeq: true, newcap: true, immed: true, */


var DEFAULT_JSON = { person: { } };


$(document).ready( function(){
  $("input").on("keyup", onInput)
});


$("#json").append(JSON.stringify(DEFAULT_JSON, undefined, 2));


var onInput = function() {
  var personInputs = {};
  $.each($("form").serializeArray(), function() {
    if (this.value !== "") {
      personInputs[this.name] = this.value;
    }
  });

  var userJson = { person: personInputs };
  $("#json").html(JSON.stringify(userJson, undefined, 2));
};

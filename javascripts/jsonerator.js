/*jslint strict: true, white: true, sub: true, onevar: true, undef: true, eqeqeq: true, newcap: true, immed: true, indent: 4 */

$(document).ready( function(){
  $("input").on("keyup", onInput);
});

var defaultMessage = {"somekey":"somevalue"};

$("#json").append(JSON.stringify(sampleJeff, undefined, 2));

var onInput = function(){
  var formInputs = {};
  $.each( $("form").serializeArray(), function() {
      formInputs[this.name] = this.value;
    });

  $("#json").html( JSON.stringify ( formInputs, undefined, 2 ) );
};
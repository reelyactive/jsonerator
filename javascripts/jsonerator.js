/*jslint strict: true, white: true, sub: true, onevar: true, undef: true, eqeqeq: true, newcap: true, immed: true, indent: 4 */

$(document).ready( function(){
  $("input").on("keyup", onInput);
});

var sampleJeff = {
  "companyLogoUrl": "http://reelyactive.com/notman/images/reelyActive.png",
  "companyName": "reelyActive",
  "companyTitle": "CEO",
  "companyUrl": "http://reelyactive.com",
  "defaultMessage": "Discovery is the catalyst for the Internet of Things",
  "firstName": "Jeffrey",
  "lastName": "Dungen",
  "linkedInPublicUrl": "http://ca.linkedin.com/in/dungen/",
  "portraitImageUrl": "http://reelyactive.com/notman/images/JeffreyDungen.jpg",
  "twitterPersonalScreenName": "reelyActive"
};

$("#json").append(JSON.stringify(sampleJeff, undefined, 2));

var onInput = function(){
  var formInputs = {};
  $.each( $("form").serializeArray(), function() {
      formInputs[this.name] = this.value;
    });

  $("#json").html( JSON.stringify ( formInputs, undefined, 2 ) );
};
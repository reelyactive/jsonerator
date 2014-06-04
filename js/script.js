/*jslint strict: true, white: true, sub: true, onevar: true, undef: true, eqeqeq: true, newcap: true, immed: true, indent: 4 */

$(document).ready( function(){
    $("input").on("keyup", onInput)
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
    var formElements = $("form").serializeArray();
    $("#json").html(JSON.stringify(formElements, undefined, 2));
    console.log(formElements);
};


// onSubmit: function (errors, values) {
//   if (errors) {
//     $('#json').html('<p>I beg your pardon?</p>');
//   }
//   else {
//     // $('#res').html('<p>Hello ' + values.name_first + ' ' + values.name_last + '.' +
//     //   (values.twitter ? '<br/>You can be found on twitter at ' + values.twitter + '.' : '') +
//     //   '</p>');
//     $('#json').html('<strong>' + JSON.stringify(values, undefined, 2) + '</strong>');
//   }
// }
// });
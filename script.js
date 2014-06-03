$('form').jsonForm({
        schema: {
          firstName: {
            type: 'string',
            title: 'First Name',
            required: true
          },
          lastName: {
            type: 'string',
            title: 'Last Name',
            required: true
          },
          companyName: {
            type: 'string',
            title: 'Company Name',
            required: true
          },
          // companyTitle: {
          //   type: 'string',
          //   title: 'Company Title',
          //   required: true
          // },
          // companyLogoUrl: {
          //   type: 'string',
          //   title: 'Company Logo (URL)',
          //   required: true
          // },
          // companyUrl: {
          //   type: 'string',
          //   title: 'Company URL',
          //   required: true
          // },
          // defaultMessage: {
          //   type: 'string',
          //   title: 'Message',
          //   required: true
          // },
          // linkedInPublicUrl: {
          //   type: 'string',
          //   title: 'LinkedIn Public URL',
          //   required: true
          // },
          // portraitImageUrl: {
          //   type: 'string',
          //   title: 'Portrait Image URL',
          //   required: true
          // },
          // twitterPersonalScreenName: {
          //   type: 'string',
          //   title: 'Twitter Handle'
          // }
        },
        onSubmit: function (errors, values) {
          if (errors) {
            $('#res').html('<p>I beg your pardon?</p>');
          }
          else {
            // $('#res').html('<p>Hello ' + values.name_first + ' ' + values.name_last + '.' +
            //   (values.twitter ? '<br/>You can be found on twitter at ' + values.twitter + '.' : '') +
            //   '</p>');
            $("#json").append("<br/><strong>" + JSON.stringify(values, undefined, 2) + "</strong>");
          }
        }
      });

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
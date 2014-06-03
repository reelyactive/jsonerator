/*jslint strict: true, white: true, sub: true, onevar: true, undef: true, eqeqeq: true, newcap: true, immed: true, indent: 4 */

$('form').jsonForm({
        schema: {
          firstName: {
            type: 'string',
            title: 'First Name',
            // required: true
          },
          lastName: {
            type: 'string',
            title: 'Last Name',
            // required: true
          },
          companyName: {
            type: 'string',
            title: 'Company Name',
            // required: true
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

        // TODO : remove submit, auto update json div

        onSubmit: function (errors, values) {
          if (errors) {
            $('#json').html('<p>I beg your pardon?</p>');
          }
          else {
            // $('#res').html('<p>Hello ' + values.name_first + ' ' + values.name_last + '.' +
            //   (values.twitter ? '<br/>You can be found on twitter at ' + values.twitter + '.' : '') +
            //   '</p>');
            $('#json').html('<br/><strong>' + JSON.stringify(values, undefined, 2) + '</strong>');
          }
        }
      });
/**
  * Copyright reelyActive 2014-2015
  * We believe in an open Internet of Things
  */

'use strict';
var mymodule = angular.module("watch", []);

// ----- Interaction controller -----
mymodule.controller("Interaction_Ctrl", function($scope) {
  $scope.show = { person: true, product: false, place: false };
  $scope.tabclass = { person: 'selected-tab', product: 'tab', place: 'tab' };

  $scope.selectPerson = function() {
    $scope.show = { person: true, product: false, place: false };
    $scope.tabclass = { person: 'selected-tab', product: 'tab', place: 'tab' };
  }

  $scope.selectProduct = function() {
    $scope.show = { person: false, product: true, place: false };
    $scope.tabclass = { person: 'tab', product: 'selected-tab', place: 'tab' };
  }

  $scope.selectPlace = function() {
    $scope.show = { person: false, product: false, place: true };
    $scope.tabclass = { person: 'tab', product: 'tab', place: 'selected-tab' };
  }
  
  $scope.countries = [ 
    {nationality: 'Afghanistan', code: 'AF'},
    {nationality: 'Aland Islands', code: 'AX'},
    {nationality: 'Albania', code: 'AL'},
    {nationality: 'Algeria', code: 'DZ'},
    {nationality: 'American Samoa', code: 'AS'},
    {nationality: 'Andorra', code: 'AD'},
    {nationality: 'Angola', code: 'AO'},
    {nationality: 'Anguilla', code: 'AI'},
    {nationality: 'Antarctica', code: 'AQ'},
    {nationality: 'Antigua and Barbuda', code: 'AG'},
    {nationality: 'Argentina', code: 'AR'},
    {nationality: 'Armenia', code: 'AM'},
    {nationality: 'Aruba', code: 'AW'},
    {nationality: 'Australia', code: 'AU'},
    {nationality: 'Austria', code: 'AT'},
    {nationality: 'Azerbaijan', code: 'AZ'},
    {nationality: 'Bahamas', code: 'BS'},
    {nationality: 'Bahrain', code: 'BH'},
    {nationality: 'Bangladesh', code: 'BD'},
    {nationality: 'Barbados', code: 'BB'},
    {nationality: 'Belarus', code: 'BY'},
    {nationality: 'Belgium', code: 'BE'},
    {nationality: 'Belize', code: 'BZ'},
    {nationality: 'Benin', code: 'BJ'},
    {nationality: 'Bermuda', code: 'BM'},
    {nationality: 'Bhutan', code: 'BT'},
    {nationality: 'Bolivia', code: 'BO'},
    {nationality: 'Bosnia and Herzegovina', code: 'BA'},
    {nationality: 'Botswana', code: 'BW'},
    {nationality: 'Bouvet Island', code: 'BV'},
    {nationality: 'Brazil', code: 'BR'},
    {nationality: 'British Indian Ocean Territory', code: 'IO'},
    {nationality: 'Brunei Darussalam', code: 'BN'},
    {nationality: 'Bulgaria', code: 'BG'},
    {nationality: 'Burkina Faso', code: 'BF'},
    {nationality: 'Burundi', code: 'BI'},
    {nationality: 'Cambodia', code: 'KH'},
    {nationality: 'Cameroon', code: 'CM'},
    {nationality: 'Canada', code: 'CA'},
    {nationality: 'Cape Verde', code: 'CV'},
    {nationality: 'Cayman Islands', code: 'KY'},
    {nationality: 'Central African Republic', code: 'CF'},
    {nationality: 'Chad', code: 'TD'},
    {nationality: 'Chile', code: 'CL'},
    {nationality: 'China', code: 'CN'},
    {nationality: 'Christmas Island', code: 'CX'},
    {nationality: 'Cocos (Keeling) Islands', code: 'CC'},
    {nationality: 'Colombia', code: 'CO'},
    {nationality: 'Comoros', code: 'KM'},
    {nationality: 'Congo', code: 'CG'},
    {nationality: 'Congo, The Democratic Republic of the', code: 'CD'},
    {nationality: 'Cook Islands', code: 'CK'},
    {nationality: 'Costa Rica', code: 'CR'},
    {nationality: 'Cote D\'Ivoire', code: 'CI'},
    {nationality: 'Croatia', code: 'HR'},
    {nationality: 'Cuba', code: 'CU'},
    {nationality: 'Cyprus', code: 'CY'},
    {nationality: 'Czech Republic', code: 'CZ'},
    {nationality: 'Denmark', code: 'DK'},
    {nationality: 'Djibouti', code: 'DJ'},
    {nationality: 'Dominica', code: 'DM'},
    {nationality: 'Dominican Republic', code: 'DO'},
    {nationality: 'Ecuador', code: 'EC'},
    {nationality: 'Egypt', code: 'EG'},
    {nationality: 'El Salvador', code: 'SV'},
    {nationality: 'Equatorial Guinea', code: 'GQ'},
    {nationality: 'Eritrea', code: 'ER'},
    {nationality: 'Estonia', code: 'EE'},
    {nationality: 'Ethiopia', code: 'ET'},
    {nationality: 'Falkland Islands (Malvinas)', code: 'FK'},
    {nationality: 'Faroe Islands', code: 'FO'},
    {nationality: 'Fiji', code: 'FJ'},
    {nationality: 'Finland', code: 'FI'},
    {nationality: 'France', code: 'FR'},
    {nationality: 'French Guiana', code: 'GF'},
    {nationality: 'French Polynesia', code: 'PF'},
    {nationality: 'French Southern Territories', code: 'TF'},
    {nationality: 'Gabon', code: 'GA'},
    {nationality: 'Gambia', code: 'GM'},
    {nationality: 'Georgia', code: 'GE'},
    {nationality: 'Germany', code: 'DE'},
    {nationality: 'Ghana', code: 'GH'},
    {nationality: 'Gibraltar', code: 'GI'},
    {nationality: 'Greece', code: 'GR'},
    {nationality: 'Greenland', code: 'GL'},
    {nationality: 'Grenada', code: 'GD'},
    {nationality: 'Guadeloupe', code: 'GP'},
    {nationality: 'Guam', code: 'GU'},
    {nationality: 'Guatemala', code: 'GT'},
    {nationality: 'Guernsey', code: 'GG'},
    {nationality: 'Guinea', code: 'GN'},
    {nationality: 'Guinea-Bissau', code: 'GW'},
    {nationality: 'Guyana', code: 'GY'},
    {nationality: 'Haiti', code: 'HT'},
    {nationality: 'Heard Island and Mcdonald Islands', code: 'HM'},
    {nationality: 'Holy See (Vatican City State)', code: 'VA'},
    {nationality: 'Honduras', code: 'HN'},
    {nationality: 'Hong Kong', code: 'HK'},
    {nationality: 'Hungary', code: 'HU'},
    {nationality: 'Iceland', code: 'IS'},
    {nationality: 'India', code: 'IN'},
    {nationality: 'Indonesia', code: 'ID'},
    {nationality: 'Iran, Islamic Republic Of', code: 'IR'},
    {nationality: 'Iraq', code: 'IQ'},
    {nationality: 'Ireland', code: 'IE'},
    {nationality: 'Isle of Man', code: 'IM'},
    {nationality: 'Israel', code: 'IL'},
    {nationality: 'Italy', code: 'IT'},
    {nationality: 'Jamaica', code: 'JM'},
    {nationality: 'Japan', code: 'JP'},
    {nationality: 'Jersey', code: 'JE'},
    {nationality: 'Jordan', code: 'JO'},
    {nationality: 'Kazakhstan', code: 'KZ'},
    {nationality: 'Kenya', code: 'KE'},
    {nationality: 'Kiribati', code: 'KI'},
    {nationality: 'Korea, Democratic People\'s Republic of', code: 'KP'},
    {nationality: 'Korea, Republic of', code: 'KR'},
    {nationality: 'Kuwait', code: 'KW'},
    {nationality: 'Kyrgyzstan', code: 'KG'},
    {nationality: 'Lao People\'s Democratic Republic', code: 'LA'},
    {nationality: 'Latvia', code: 'LV'},
    {nationality: 'Lebanon', code: 'LB'},
    {nationality: 'Lesotho', code: 'LS'},
    {nationality: 'Liberia', code: 'LR'},
    {nationality: 'Libyan Arab Jamahiriya', code: 'LY'},
    {nationality: 'Liechtenstein', code: 'LI'},
    {nationality: 'Lithuania', code: 'LT'},
    {nationality: 'Luxembourg', code: 'LU'},
    {nationality: 'Macao', code: 'MO'},
    {nationality: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
    {nationality: 'Madagascar', code: 'MG'},
    {nationality: 'Malawi', code: 'MW'},
    {nationality: 'Malaysia', code: 'MY'},
    {nationality: 'Maldives', code: 'MV'},
    {nationality: 'Mali', code: 'ML'},
    {nationality: 'Malta', code: 'MT'},
    {nationality: 'Marshall Islands', code: 'MH'},
    {nationality: 'Martinique', code: 'MQ'},
    {nationality: 'Mauritania', code: 'MR'},
    {nationality: 'Mauritius', code: 'MU'},
    {nationality: 'Mayotte', code: 'YT'},
    {nationality: 'Mexico', code: 'MX'},
    {nationality: 'Micronesia, Federated States of', code: 'FM'},
    {nationality: 'Moldova, Republic of', code: 'MD'},
    {nationality: 'Monaco', code: 'MC'},
    {nationality: 'Mongolia', code: 'MN'},
    {nationality: 'Montserrat', code: 'MS'},
    {nationality: 'Morocco', code: 'MA'},
    {nationality: 'Mozambique', code: 'MZ'},
    {nationality: 'Myanmar', code: 'MM'},
    {nationality: 'Namibia', code: 'NA'},
    {nationality: 'Nauru', code: 'NR'},
    {nationality: 'Nepal', code: 'NP'},
    {nationality: 'Netherlands', code: 'NL'},
    {nationality: 'Netherlands Antilles', code: 'AN'},
    {nationality: 'New Caledonia', code: 'NC'},
    {nationality: 'New Zealand', code: 'NZ'},
    {nationality: 'Nicaragua', code: 'NI'},
    {nationality: 'Niger', code: 'NE'},
    {nationality: 'Nigeria', code: 'NG'},
    {nationality: 'Niue', code: 'NU'},
    {nationality: 'Norfolk Island', code: 'NF'},
    {nationality: 'Northern Mariana Islands', code: 'MP'},
    {nationality: 'Norway', code: 'NO'},
    {nationality: 'Oman', code: 'OM'},
    {nationality: 'Pakistan', code: 'PK'},
    {nationality: 'Palau', code: 'PW'},
    {nationality: 'Palestinian Territory, Occupied', code: 'PS'},
    {nationality: 'Panama', code: 'PA'},
    {nationality: 'Papua New Guinea', code: 'PG'},
    {nationality: 'Paraguay', code: 'PY'},
    {nationality: 'Peru', code: 'PE'},
    {nationality: 'Philippines', code: 'PH'},
    {nationality: 'Pitcairn', code: 'PN'},
    {nationality: 'Poland', code: 'PL'},
    {nationality: 'Portugal', code: 'PT'},
    {nationality: 'Puerto Rico', code: 'PR'},
    {nationality: 'Qatar', code: 'QA'},
    {nationality: 'Reunion', code: 'RE'},
    {nationality: 'Romania', code: 'RO'},
    {nationality: 'Russian Federation', code: 'RU'},
    {nationality: 'Rwanda', code: 'RW'},
    {nationality: 'Saint Helena', code: 'SH'},
    {nationality: 'Saint Kitts and Nevis', code: 'KN'},
    {nationality: 'Saint Lucia', code: 'LC'},
    {nationality: 'Saint Pierre and Miquelon', code: 'PM'},
    {nationality: 'Saint Vincent and the Grenadines', code: 'VC'},
    {nationality: 'Samoa', code: 'WS'},
    {nationality: 'San Marino', code: 'SM'},
    {nationality: 'Sao Tome and Principe', code: 'ST'},
    {nationality: 'Saudi Arabia', code: 'SA'},
    {nationality: 'Senegal', code: 'SN'},
    {nationality: 'Serbia and Montenegro', code: 'CS'},
    {nationality: 'Seychelles', code: 'SC'},
    {nationality: 'Sierra Leone', code: 'SL'},
    {nationality: 'Singapore', code: 'SG'},
    {nationality: 'Slovakia', code: 'SK'},
    {nationality: 'Slovenia', code: 'SI'},
    {nationality: 'Solomon Islands', code: 'SB'},
    {nationality: 'Somalia', code: 'SO'},
    {nationality: 'South Africa', code: 'ZA'},
    {nationality: 'South Georgia and the South Sandwich Islands', code: 'GS'},
    {nationality: 'Spain', code: 'ES'},
    {nationality: 'Sri Lanka', code: 'LK'},
    {nationality: 'Sudan', code: 'SD'},
    {nationality: 'Surinationality', code: 'SR'},
    {nationality: 'Svalbard and Jan Mayen', code: 'SJ'},
    {nationality: 'Swaziland', code: 'SZ'},
    {nationality: 'Sweden', code: 'SE'},
    {nationality: 'Switzerland', code: 'CH'},
    {nationality: 'Syrian Arab Republic', code: 'SY'},
    {nationality: 'Taiwan, Province of China', code: 'TW'},
    {nationality: 'Tajikistan', code: 'TJ'},
    {nationality: 'Tanzania, United Republic of', code: 'TZ'},
    {nationality: 'Thailand', code: 'TH'},
    {nationality: 'Timor-Leste', code: 'TL'},
    {nationality: 'Togo', code: 'TG'},
    {nationality: 'Tokelau', code: 'TK'},
    {nationality: 'Tonga', code: 'TO'},
    {nationality: 'Trinidad and Tobago', code: 'TT'},
    {nationality: 'Tunisia', code: 'TN'},
    {nationality: 'Turkey', code: 'TR'},
    {nationality: 'Turkmenistan', code: 'TM'},
    {nationality: 'Turks and Caicos Islands', code: 'TC'},
    {nationality: 'Tuvalu', code: 'TV'},
    {nationality: 'Uganda', code: 'UG'},
    {nationality: 'Ukraine', code: 'UA'},
    {nationality: 'United Arab Emirates', code: 'AE'},
    {nationality: 'United Kingdom', code: 'GB'},
    {nationality: 'United States', code: 'US'},
    {nationality: 'United States Minor Outlying Islands', code: 'UM'},
    {nationality: 'Uruguay', code: 'UY'},
    {nationality: 'Uzbekistan', code: 'UZ'},
    {nationality: 'Vanuatu', code: 'VU'},
    {nationality: 'Venezuela', code: 'VE'},
    {nationality: 'Vietnam', code: 'VN'},
    {nationality: 'Virgin Islands, British', code: 'VG'},
    {nationality: 'Virgin Islands, U.S.', code: 'VI'},
    {nationality: 'Wallis and Futuna', code: 'WF'},
    {nationality: 'Western Sahara', code: 'EH'},
    {nationality: 'Yemen', code: 'YE'},
    {nationality: 'Zambia', code: 'ZM'},
    {nationality: 'Zimbabwe', code: 'ZW'}
  ];
  
});


// ----- Person controller -----
mymodule.controller("Person_Ctrl", function($scope) {
  $scope.person_ld = {
      "@context": {
        "schema": "http://schema.org/"
      },
      "@graph": [
        {
          "@id": "person",
          "@type": "schema:Person",
        }
      ]
    };
  $scope.person = {};

  function changeKeyValue() {
    for(var key in $scope.person) {
      if($scope.person.hasOwnProperty(key)) {
        if(!$scope.person[key].length) {
          delete $scope.person_ld["@graph"][0]["schema:" + key];
        } 
        else {
          $scope.person_ld["@graph"][0]["schema:" + key] = $scope.person[key];
        }
      }
    }
  }
  
  $scope.change = function() {
    changeKeyValue();
  }
});


// ----- Product controller -----
mymodule.controller("Product_Ctrl", function($scope) {
  $scope.product_ld = {
      "@context": {
       "schema": "http://schema.org/"
      },
      "@graph": [
        {
          "@id": "product",
          "@type": "schema:Product",
          "schema:manufacturer": {
            "@type": "schema.Organization"
          }
        }
      ]
    };
  $scope.product = {};
   
  function changeKeyValue() {
    for(var key in $scope.product) {
      if ($scope.product.hasOwnProperty(key)) {
        if(!$scope.product[key].length) {                     
          delete $scope.product_ld["@graph"][0]["schema:" + key];
          delete $scope.product_ld["@graph"][0]["schema:manufacturer"][key];
        }
        else if($scope.product[key] == $scope.product.name) {
          $scope.product_ld["@graph"][0]["schema:manufacturer"][key] = $scope.product[key];
        }
        else if($scope.product[key] == $scope.product.model) {
          $scope.product_ld["@graph"][0]["schema:" + key] = $scope.product[key];
        }
        else if($scope.product[key] == $scope.product.logo) {
          $scope.product_ld["@graph"][0]["schema:" + key] = $scope.product[key];
        }
        else if($scope.product[key] == $scope.product.url) {
          $scope.product_ld["@graph"][0]["schema:" + key] = $scope.product[key];
        }
        else if($scope.product[key] == $scope.product.image) {
          $scope.product_ld["@graph"][0]["schema:" + key] = $scope.product[key];
        }
      }
    }
  } 

  $scope.change = function () {
    changeKeyValue();
  }

});


// ----- Place controller -----
mymodule.controller("Place_Ctrl", function($scope) {
  $scope.place_ld = {
      "@context": {
        "schema": "http://schema.org/"
      },
      "@graph": [
         {
           "@id": "place",
           "@type": "schema:Place",
           "schema:address": {
             "@type": "schema.PostalAddress"
           }
        }
      ]
    };
  $scope.place = {};
   
  function changeKeyValue() {
    for(var key in $scope.place) {
      if($scope.place.hasOwnProperty(key)) {
        if(!$scope.place[key].length) {
          delete $scope.place_ld["@graph"][0]["schema:" + key];
          delete $scope.place_ld["@graph"] [0]["schema:address"][key];
        } 
        else if($scope.place[key]== $scope.place.name) {
          $scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];
        }
        else if($scope.place[key]== $scope.place.streetaddress) {
          $scope.place_ld["@graph"][0]["schema:address"][key] = $scope.place[key];
        }
        else if($scope.place[key]== $scope.place.addresslocality) {
          $scope.place_ld["@graph"][0]["schema:address"][key] = $scope.place[key];
        }        
        else if($scope.place[key]== $scope.place.addressRegion) {
          $scope.place_ld["@graph"][0]["schema:address"][key] = $scope.place[key];
        }
        else if($scope.place[key]== $scope.place.postalCode) {
          $scope.place_ld["@graph"][0]["schema:address"][key] = $scope.place[key];
        }
        else if($scope.place[key] == $scope.place.AddressCountry) {
          $scope.place_ld["@graph"][0]["schema:address"][key] = $scope.place[key];
        }
        else if($scope.place[key]== $scope.place.logo) {
          $scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];
        }
        else if($scope.place[key]== $scope.place.url) {
          $scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];
        }
        else if($scope.place[key]== $scope.place.image) {
          $scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];
        }
      }
    }
  }

  $scope.change = function() {
    changeKeyValue();
  }

});


  



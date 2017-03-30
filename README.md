# payments_javascript_sdk

PaymentsJavascriptSdk - JavaScript client for payments_javascript_sdk
No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 5.0
- Package version: 5.0
- Build date: 2017-03-30T09:41:47.059+02:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install payments_javascript_sdk --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PaymentsJavascriptSdk = require('payments_javascript_sdk');

var defaultClient = PaymentsJavascriptSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth_2_0_authorization_code
var oauth_2_0_authorization_code = defaultClient.authentications['oauth_2_0_authorization_code'];
oauth_2_0_authorization_code.accessToken = "YOUR ACCESS TOKEN"

// Configure OAuth2 access token for authorization: oauth_2_0_client_credentials
var oauth_2_0_client_credentials = defaultClient.authentications['oauth_2_0_client_credentials'];
oauth_2_0_client_credentials.accessToken = "YOUR ACCESS TOKEN"

var api = new PaymentsJavascriptSdk.DefaultApi()

var sCSVersion = "sCSVersion_example"; // {String} The version of the API, value must be \"**<<SCS-Version>>**\".  This header indicates which version of the API should serve the request. If the value of the header is missing or it indicates a wrong version, the API returns an error message. 

var paymentRequest = new PaymentsJavascriptSdk.PaymentRequest(); // {PaymentRequest} 

var opts = { 
  'sCSRequestID': "sCSRequestID_example" // {String} The request ID.  It is used by the API to trace the fulfillment of a request. The API user may provide its own request ID or can accept the request ID generated by the API. In both cases the request ID is returned in the header of the response.  This ID should be refered by the API users in their communication with Swisscom whenever requesting details about the execution of a request. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createPayment(sCSVersion, paymentRequest, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.swisscom.com/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PaymentsJavascriptSdk.DefaultApi* | [**createPayment**](docs/DefaultApi.md#createPayment) | **POST** /payments | 
*PaymentsJavascriptSdk.DefaultApi* | [**getPayment**](docs/DefaultApi.md#getPayment) | **GET** /payments/{paymentId} | 
*PaymentsJavascriptSdk.DefaultApi* | [**searchPayments**](docs/DefaultApi.md#searchPayments) | **GET** /payments | 


## Documentation for Models

 - [PaymentsJavascriptSdk.Error](docs/Error.md)
 - [PaymentsJavascriptSdk.PaymentDetails](docs/PaymentDetails.md)
 - [PaymentsJavascriptSdk.PaymentRequest](docs/PaymentRequest.md)
 - [PaymentsJavascriptSdk.PaymentRequestPayerId](docs/PaymentRequestPayerId.md)
 - [PaymentsJavascriptSdk.PaymentStatus](docs/PaymentStatus.md)
 - [PaymentsJavascriptSdk.PaymentsCollection](docs/PaymentsCollection.md)


## Documentation for Authorization


### oauth_2_0_authorization_code

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://consent.swisscom.com/c/oauth2/auth
- **Scopes**: 
  - read-payment: Allows reading payments.
  - write-payment: Allows writing payments.

### oauth_2_0_client_credentials

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


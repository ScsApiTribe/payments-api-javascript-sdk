/**
 * Payments
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 5.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PaymentRequestPayerId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentRequestPayerId'));
  } else {
    // Browser globals (root is window)
    if (!root.SwisscomPaymentsJavascriptSdk) {
      root.SwisscomPaymentsJavascriptSdk = {};
    }
    root.SwisscomPaymentsJavascriptSdk.PaymentRequest = factory(root.SwisscomPaymentsJavascriptSdk.ApiClient, root.SwisscomPaymentsJavascriptSdk.PaymentRequestPayerId);
  }
}(this, function(ApiClient, PaymentRequestPayerId) {
  'use strict';




  /**
   * The PaymentRequest model module.
   * @module model/PaymentRequest
   * @version 5.0.16
   */

  /**
   * Constructs a new <code>PaymentRequest</code>.
   * @alias module:model/PaymentRequest
   * @class
   * @param amount {Number} The gross amount in Swiss Francs (CHF). Includes the VAT. Negative value represents refund.
   * @param description {String} The description or purpose of the payment to be shown on the bill. The description should be encoded in ISO-8859-1 charset, since those are guaranteed to be properly printed on the Swisscom bill.
   * @param idempotencyKey {String} The key identifier provided by the API consumer used so that the same payment transaction cannot be made twice.For example, if a request to create a charge fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single charge is created.
   */
  var exports = function(amount, description, idempotencyKey) {
    var _this = this;

    _this['amount'] = amount;
    _this['description'] = description;
    _this['idempotencyKey'] = idempotencyKey;


  };

  /**
   * Constructs a <code>PaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentRequest} obj Optional instance to populate.
   * @return {module:model/PaymentRequest} The populated <code>PaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('idempotencyKey')) {
        obj['idempotencyKey'] = ApiClient.convertToType(data['idempotencyKey'], 'String');
      }
      if (data.hasOwnProperty('payerId')) {
        obj['payerId'] = PaymentRequestPayerId.constructFromObject(data['payerId']);
      }
      if (data.hasOwnProperty('taxRate')) {
        obj['taxRate'] = ApiClient.convertToType(data['taxRate'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The gross amount in Swiss Francs (CHF). Includes the VAT. Negative value represents refund.
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * The description or purpose of the payment to be shown on the bill. The description should be encoded in ISO-8859-1 charset, since those are guaranteed to be properly printed on the Swisscom bill.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The key identifier provided by the API consumer used so that the same payment transaction cannot be made twice.For example, if a request to create a charge fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single charge is created.
   * @member {String} idempotencyKey
   */
  exports.prototype['idempotencyKey'] = undefined;
  /**
   * @member {module:model/PaymentRequestPayerId} payerId
   */
  exports.prototype['payerId'] = undefined;
  /**
   * Tax rate (VAT) expressed in percent. Valid values 0.0, 2.5, 8.0. Default value is 0.0
   * @member {Number} taxRate
   */
  exports.prototype['taxRate'] = undefined;



  return exports;
}));



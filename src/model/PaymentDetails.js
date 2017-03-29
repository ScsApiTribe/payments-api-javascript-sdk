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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Payments) {
      root.Payments = {};
    }
    root.Payments.PaymentDetails = factory(root.Payments.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentDetails model module.
   * @module model/PaymentDetails
   * @version 5.0
   */

  /**
   * Constructs a new <code>PaymentDetails</code>.
   * @alias module:model/PaymentDetails
   * @class
   * @param amount {Number} The gross amount in Swiss Francs (CHF). Includes the VAT. Negative value represents refund.
   * @param description {String} The description or purpose of the payment as shown on the bill.
   * @param id {String} The payment transaction identifier generated from the API used to track the transaction.
   */
  var exports = function(amount, description, id) {
    var _this = this;

    _this['amount'] = amount;
    _this['description'] = description;
    _this['id'] = id;



  };

  /**
   * Constructs a <code>PaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentDetails} obj Optional instance to populate.
   * @return {module:model/PaymentDetails} The populated <code>PaymentDetails</code> instance.
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
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('idempotencyKey')) {
        obj['idempotencyKey'] = ApiClient.convertToType(data['idempotencyKey'], 'String');
      }
      if (data.hasOwnProperty('paymentStatus')) {
        obj['paymentStatus'] = ApiClient.convertToType(data['paymentStatus'], 'String');
      }
      if (data.hasOwnProperty('paymentStatusDetails')) {
        obj['paymentStatusDetails'] = ApiClient.convertToType(data['paymentStatusDetails'], 'String');
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
   * The description or purpose of the payment as shown on the bill.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The payment transaction identifier generated from the API used to track the transaction.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The key identifier provided by the API consumer used so that the same transaction cannot be made twice.For example, if a request to create a charge fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single charge is created.
   * @member {String} idempotencyKey
   */
  exports.prototype['idempotencyKey'] = undefined;
  /**
   * Specifies the status of the payment transaction. eg: billed,accepted,error
   * @member {String} paymentStatus
   */
  exports.prototype['paymentStatus'] = undefined;
  /**
   * Details in case the payment transaction is in error status.
   * @member {String} paymentStatusDetails
   */
  exports.prototype['paymentStatusDetails'] = undefined;



  return exports;
}));


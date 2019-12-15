/**
 * @license
 * Copyright 2012 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating ASEL code for ASEL blocks.
 * @author jonpas33@gmail.com (Jonpas)
 */
'use strict';

goog.require('Blockly.JavaScript');


Blockly.JavaScript['use'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // Assemble ASEL into code variable.
  var code = 'use "' + value_name + '"\n';
  return code;
};

Blockly.JavaScript['initialize'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  // Assemble ASEL into code variable.
  var code = 'init {\n' + statements_code + '}\n\n';
  return code;
};

Blockly.JavaScript['init_pin'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // Assemble ASEL into code variable.
  var code = 'pin ' + value_name + ' = ' + value_value + '\n';
  return code;
};

Blockly.JavaScript['page_handler'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  var value_return = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC);
  // Assemble ASEL into code variable.
  var code = '\npagehandle ' + value_name + ' {\n' + statements_code + '  -> ' + value_return + '\n}\n';
  return code;
};

Blockly.JavaScript['handle_arg'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  // Assemble ASEL into code variable.
  var code = 'handle ' + value_name + ' {\n' + statements_code + '}\n';
  return code;
};

Blockly.JavaScript['init_wifi'] = function(block) {
  var value_ssid = Blockly.JavaScript.valueToCode(block, 'SSID', Blockly.JavaScript.ORDER_ATOMIC);
  var value_password = Blockly.JavaScript.valueToCode(block, 'PASSWORD', Blockly.JavaScript.ORDER_ATOMIC);
  var value_page_file = Blockly.JavaScript.valueToCode(block, 'PAGE_FILE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_style_file = Blockly.JavaScript.valueToCode(block, 'STYLE_FILE', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_buttons = Blockly.JavaScript.statementToCode(block, 'BUTTONS');
  // Assemble ASEL into code variable.
  var code = '\nwifi ' + value_ssid + ' ' + value_password + ' ' + value_page_file + ' ' + value_style_file + ' {\n' + statements_buttons + '}\n';
  return code;
};

Blockly.JavaScript['wifi_link'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_page_handler = Blockly.JavaScript.valueToCode(block, 'PAGE_HANDLER', Blockly.JavaScript.ORDER_ATOMIC);
  // Assemble ASEL into code variable.
  var code = value_name + ' -> ' + value_page_handler + '\n';
  return code;
};

Blockly.JavaScript['prepare'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  // Assemble ASEL into code variable.
  var code = 'prepare {\n' + statements_code + '}\n\n';
  return code;
};

Blockly.JavaScript['mode_pin'] = function(block) {
  var dropdown_mode = block.getFieldValue('MODE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // Assemble ASEL into code variable.
  var code = '' + dropdown_mode + '|';
  if (['out', 'in'].includes(dropdown_mode)) {
    code = dropdown_mode + ' ' + value_name + '\n';
  } else if (['on', 'off'].includes(dropdown_mode)) {
    code = value_name + ' = ' + dropdown_mode + '\n';
  }
  return code;
};

Blockly.JavaScript['preproc_raw'] = function(block) {
  var value_code = Blockly.JavaScript.valueToCode(block, 'CODE', Blockly.JavaScript.ORDER_ATOMIC);
  // Assemble ASEL into code variable.
  var code = 'raw {\n' + value_code + '}\n';
  return code;
};

Blockly.JavaScript['preproc_ifdef'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // Assemble ASEL into code variable.
  var code = 'ifdef ' + value_condition + ' {\n' + statements_name + '}\n';
  return code;
};

Blockly.JavaScript['run'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  // Assemble ASEL into code variable.
  var code = 'run {\n' + statements_code + '}\n';
  return code;
};

Blockly.JavaScript['run_wifi'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
  // Assemble ASEL into code variable.
  var code = 'wifi\n';
  return code;
};

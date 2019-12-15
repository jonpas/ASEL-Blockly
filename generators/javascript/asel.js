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
 * @fileoverview Generating JavaScript for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.require('Blockly.JavaScript');


Blockly.JavaScript['use'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'use\n';
  return code;
};

Blockly.JavaScript['initialize'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'initialize\n';
  return code;
};

Blockly.JavaScript['init_pin'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'init_pin\n';
  return code;
};

Blockly.JavaScript['page_handler'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  var value_return = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'page_handler\n';
  return code;
};

Blockly.JavaScript['handle_arg'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'handle_arg\n';
  return code;
};

Blockly.JavaScript['init_wifi'] = function(block) {
  var value_ssid = Blockly.JavaScript.valueToCode(block, 'SSID', Blockly.JavaScript.ORDER_ATOMIC);
  var value_password = Blockly.JavaScript.valueToCode(block, 'PASSWORD', Blockly.JavaScript.ORDER_ATOMIC);
  var value_page_file = Blockly.JavaScript.valueToCode(block, 'PAGE_FILE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_style_file = Blockly.JavaScript.valueToCode(block, 'STYLE_FILE', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_buttons = Blockly.JavaScript.statementToCode(block, 'BUTTONS');
  // TODO: Assemble JavaScript into code variable.
  var code = 'init_wifi\n';
  return code;
};

Blockly.JavaScript['wifi_link'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_page_handler = Blockly.JavaScript.valueToCode(block, 'PAGE_HANDLER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'wifi_link\n';
  return code;
};

Blockly.JavaScript['prepare'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'prepare\n';
  return code;
};

Blockly.JavaScript['mode_pin'] = function(block) {
  var dropdown_mode = block.getFieldValue('MODE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'mode_pin\n';
  return code;
};

Blockly.JavaScript['preproc_raw'] = function(block) {
  var value_code = Blockly.JavaScript.valueToCode(block, 'CODE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'preproc_raw\n';
  return code;
};

Blockly.JavaScript['preproc_ifdef'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'preproc_ifdef\n';
  return code;
};

Blockly.JavaScript['run'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'run\n';
  return code;
};

Blockly.JavaScript['run_wifi'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = 'run_wifi\n';
  return code;
};

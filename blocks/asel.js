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
 * @fileoverview ASEL blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author jonpas33@gmail.com (Jonpas)
 */
'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldColour');
goog.require('Blockly.FieldLabel');


Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "use",
    "message0": "use %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "previousStatement": "use",
    "nextStatement": [
      "use",
      "initialize"
    ],
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "initialize",
    "message0": "initialize %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CODE"
      }
    ],
    "previousStatement": "use",
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "init_pin",
    "message0": "pin %1 %2 value %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "page_handler",
    "message0": "pagehandle %1 %2 return %3",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      },
      {
        "type": "input_statement",
        "name": "CODE"
      },
      {
        "type": "input_value",
        "name": "RETURN",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "handle_arg",
    "message0": "handle %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      },
      {
        "type": "input_statement",
        "name": "CODE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "init_wifi",
    "message0": "ssid %1 password %2 page file %3 style file %4 %5",
    "args0": [
      {
        "type": "input_value",
        "name": "SSID",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "PASSWORD",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "PAGE_FILE",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "STYLE_FILE",
        "check": "String"
      },
      {
        "type": "input_statement",
        "name": "BUTTONS",
        "check": "wifi_link"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "wifi_link",
    "message0": "link %1 page handler %2",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "PAGE_HANDLER",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": "wifi_link",
    "nextStatement": "wifi_link",
    "colour": 260,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "prepare",
    "message0": "prepare %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CODE"
      }
    ],
    "previousStatement": [
      "use",
      "initialize"
    ],
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "mode_pin",
    "message0": "pin %1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "out",
            "out"
          ],
          [
            "in",
            "in"
          ],
          [
            "on",
            "on"
          ],
          [
            "off",
            "off"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "preproc_raw",
    "message0": "raw %1",
    "args0": [
      {
        "type": "input_value",
        "name": "CODE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "preproc_ifdef",
    "message0": "if defined %1 do %2",
    "args0": [
      {
        "type": "input_value",
        "name": "CONDITION",
        "check": "Boolean"
      },
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "run",
    "message0": "run %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CODE"
      }
    ],
    "previousStatement": [
      "use",
      "initialize",
      "prepare"
    ],
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "run_wifi",
    "message0": "wifi %1",
    "args0": [
      {
        "type": "field_checkbox",
        "name": "NAME",
        "checked": true
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
]);  // END JSON EXTRACT (Do not delete this comment.)

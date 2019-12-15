# Blockly for Airsoft Explosive Language [ASEL]

**This is a heavy work in progress project!** Used as a learning resource for visual languages and unlikely to ever be finished.

[Airsoft Explosive Language [ASEL]](https://github.com/jonpas/ASEL) is a Domain-Specific Language (DSL) for easy creation of programs designed to simulate a sports explosive device in an [Airsoft](https://en.wikipedia.org/wiki/Airsoft) setting.

Google's Blockly is a web-based, visual programming editor. Users can drag
blocks together to build programs. All code is free and open source. This is a fork of [Blockly](https://github.com/google/blockly).


This projects adds support for ASEL to Blockly, with _most_ language concepts that are also available in the ASEL text language. **Generation is not supported**, only simple JavaScript generation with names of blocks is prepared.


### Branches

There are two main branches for Blockly.

**[`asel`](https://github.com/jonpas/ASEL-Blockly)** - This is the (mostly) stable current release of ASEL-Blockly.

**[`master`](https://github.com/jonpas/ASEL-Blockly/tree/master)** - This is the upstream (mostly) stable release of Blockly.


### Showcase

Following websites (`index.html`) have ASEL support:
- `tests/playground.html`
- `demos/code/index.html`
- `demos/asel/index.html` - contains example program


### Development

Each release also contains exported Blockly Developer Tools library (`library.xml`) for ease of block development.

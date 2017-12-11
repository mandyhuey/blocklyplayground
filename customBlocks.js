
goog.require('Blockly.Blocks');

/************************
 *  BLOCKLY DEFINITIONS  *
 *************************/

Blockly.Blocks['whenrunclicked'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("When RUN is clicked");
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clearscreen'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Clear Canvas");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['catpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change cat pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "catIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minionpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change minion pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "minionIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['say'] = {
  init: function() {
    this.appendValueInput("displayWord")
    .setCheck("String")
    .appendField("Say");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['whenrunclicked'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var blockCode = statements_name;
    return blockCode;
};

Blockly.JavaScript['clearscreen'] = function(block) {
    var blockCode = 'clearCanvas();';
    return blockCode;
};

Blockly.JavaScript['catpose'] = function(block) {
    var dropdown_catindex = block.getFieldValue('catIndex');
    var blockCode = 'updatePose('+dropdown_catindex+', 1);';
    return blockCode;
};

Blockly.JavaScript['minionpose'] = function(block) {
    var dropdown_minionindex = block.getFieldValue('minionIndex');
    var blockCode = 'updatePose('+dropdown_minionindex+', 2);';
    return blockCode;
};


Blockly.JavaScript['say'] = function(block) {
  var value_displayword = Blockly.JavaScript.valueToCode(block, 'displayWord', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var blockCode = 'updateSayings('+value_displayword+');';
  console.log(value_displayword);
  return blockCode;
};

/**
 * enyo.OmniFlexLayout.ResponseStrategy kind definition
 * @author: Lex Podgorny
 */

enyo.kind({
	name: 'enyo.OmniFlexLayout.ResponseStrategy',
	
	setProperty: function(oControl, sProperty, mValue) {
		if (sProperty == 'flexOrient') {
			enyo.Styles.setStyles(oControl, {width: 'auto', height: 'auto'});
		}
		
		oControl['__' + sProperty] = (typeof oControl[sProperty] == 'undefined' 
			? null 
			: oControl[sProperty]
		);
		oControl[sProperty] = mValue;
	},
	
	reverseProperty: function(oControl, sProperty) {
		if (sProperty == 'flexOrient') {
			enyo.Styles.setStyles(oControl, {width: 'auto', height: 'auto'});
		}
		
		var sTempProperty = '__' + sProperty;
		if (typeof oControl[sTempProperty] != 'undefined') {
			if (oControl[sTempProperty] !== null) {
				oControl[sProperty] = oControl[sTempProperty];
			} else {
				delete oControl[sProperty];
			}
			delete oControl[sTempProperty];
		}
	},
	
	respond: function() {},
});
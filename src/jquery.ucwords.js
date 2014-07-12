(function($){

var ucwords = {
	init: function(el, startIndex, endIndex){
		this.el = el;
		this.$el = $(el);
		this.words = this.$el.text().split(' ');
		
		this.startIndex = startIndex || 0;
		this.endIndex =  endIndex ? startIndex + endIndex : this.words.length;
		
		this.$el.text(this.uppercaseWords());
	},
	
	uppercaseWords: function(){
		
		var result = [];
		
		for(var i = 0; i < this.words.length; i++)
		{
			(i >= this.startIndex && (i < this.endIndex))
				? result.push(this.replaceFirstCharacterWithUppercase(this.words[i]))
				: result.push(this.words[i]);
		}
		
		return result.join(' ');
	},
	
	replaceFirstCharacterWithUppercase: function(word){
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
}

$.fn.ucwords = function(startIndex, endIndex){
	var obj = Object.create(ucwords);
	
	return this.each(function(){
		obj.init(this, startIndex, endIndex);
	});
}

})(jQuery);
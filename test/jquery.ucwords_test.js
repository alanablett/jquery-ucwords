(function($){
	
	module('jQuery#ucwords', {
		setup : function(){
			this.fixture = $('p#fixture')
		}
	});
	
	test('is available on the jQuery object', 1, function(){
		ok($.fn.ucwords);
	});
	
	test('is chainable with the jQuery object', 1, function(){
		strictEqual( this.fixture.ucwords(), this.fixture );
	});
	
	test('should uppercase all words if no range is specified', 1, function(){
		strictEqual( this.fixture.ucwords().text(), 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing.' );
	});
	
	test('should uppercase words after the start index if no end index is specified', 1, function(){
		strictEqual( this.fixture.ucwords(3).text(), 'Lorem ipsum dolor Sit Amet Consectetur Adipisicing.' );
	});
	
	test('should uppercase words after the start index for a count specified', 1, function(){
		strictEqual( this.fixture.ucwords(3, 2).text(), 'Lorem ipsum dolor Sit Amet consectetur adipisicing.' );
	});
	
	test('should uppercase words after the start index for a high count specified', 1, function(){
		strictEqual( this.fixture.ucwords(3, 2000).text(), 'Lorem ipsum dolor Sit Amet Consectetur Adipisicing.' );
	});
	
})(jQuery);
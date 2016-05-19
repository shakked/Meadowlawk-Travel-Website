suite('"About" Page Tests', function() {
	test('age should contain link to contact page', function() {
		assert($('a[href="/contact"]').length);
	});
});
'use strict';

module.exports = function (t, a) {
	var ast = { type: 'ExpressionStatement',
		expression:
		{ type: 'MemberExpression',
			computed: false,
			object: { type: 'Identifier', name: 'x' },
			property: { type: 'Identifier', name: 'delete' } } };
	a(t(ast), ast, "Return");
	a.deep(ast, { type: 'ExpressionStatement',
			expression:
			{ type: 'MemberExpression',
				computed: true,
				object: { type: 'Identifier', name: 'x' },
				property: { type: 'Literal', value: 'delete', raw: '\'delete\'' } } });
};

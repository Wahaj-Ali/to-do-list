/* eslint-disable */

import createMockDocument from '../mocks/mockDocument.js';

describe('this test', () => {
	test('creates a ul in the document to mock the actual html document', () => {
		createMockDocument();
		expect(document.children.length).toEqual(1);
	});
});
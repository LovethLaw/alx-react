import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";



describe("Utiliy test", () => {
	// testing get full year
	test("Tesing For full year", () => {
		const currentYear = new Date().getFullYear();
		expect(getFullYear()).toBe(currentYear);
	})

	// testing footer
	test("tesing for footer true", () => {
		expect(getFooterCopy(true)).toBe("Holberton School");
	})

	test("tesing for footer false", () => {
		expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
	})

	// Test for getLatestNotification
	test('getLatestNotification returns the correct string', () => {
		expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
	});

})
const zen = `
Zen of JavaScript:

1. Readability counts.
2. Explicit is better than implicit.
3. Simplicity over cleverness.
4. Avoid premature optimization.
5. Embrace the async nature.
6. Objects over magic strings.
7. Functions are first-class citizens.
8. Use const and let, not var.
9. Avoid global pollution.
10. Comments are for clarity, not excuses.
11. Semicolons are optional, but consistency counts.
12. Prefer composition over inheritance.
13. Keep it DRY.
14. Test your assumptions.
15. Error handling is not optional.
16. Use promises or async/await wisely.
17. Avoid callback hell.
18. Modules are your friends.
19. Console.log wisely.
20. Learn the prototype chain.
21. Enjoy coding.
`;

function print(delay = 500) {
	zen.trim().split('\n').forEach((line, i) => {
			setTimeout(() => console.log(line), i * delay);
		});
}

module.exports = {
	  zen,
	  print,
};

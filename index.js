const rect = require('./rectangle')

function solveRect(l, b) {
	console.log(`Solving for rectangle with l =${l} and b = ${b}`)
	if (l <= 0 || b <= 0) {
		console.log(
			`rectangle dimentions should be greater than Zero: l = ${l} and b = ${b} \n`
		)
	} else {
		console.log(`The area of the rectangle is ${rect.area(l, b)} \n`)

		console.log(`The perimeter of the rectangle is ${rect.perimeter(l, b)} \n`)
	}
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(0, 5)
solveRect(-3, 5)

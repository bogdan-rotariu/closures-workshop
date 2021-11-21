/* eslint-disable no-unused-vars */

// CHALLENGE 1
function createFunction() {
	return () => console.log('hello')
}

// const function1 = createFunction()
// function1() // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
	return () => console.log(input)
}

// const printSample = createFunctionPrinter('sample')
// printSample() // => should console.log('sample');
// const printHello = createFunctionPrinter('hello')
// printHello() // => should console.log('hello');


// CHALLENGE 3
function outer() {
	let counter = 0
	function incrementCounter () {
		counter ++
		console.log('counter', counter)
	}
	return incrementCounter
}

const willCounter = outer()
const jasCounter = outer()

// Uncomment each of these lines one by one.
// willCounter()
// willCounter()
// willCounter()

// jasCounter()
// willCounter()


function addByX(x) {
	return y => x + y
}

// const addByTwo = addByX(2)
// addByTwo(1) // => should return 3
// addByTwo(2) // => should return 4
// addByTwo(3) // => should return 5

// const addByThree = addByX(3)
// addByThree(1) // => should return 4
// addByThree(2) // => should return 5

// const addByFour = addByX(4)
// addByFour(4) // => should return 8
// addByFour(5) // => should return 9


// CHALLENGE 4
function once(func) {
	let output = null
	return param => {
		if(!output) {
			output = func(param)
		}
		return output
	}
}

// const onceFunc = once(addByTwo)
// console.log(onceFunc(4))  // => should log 6
// console.log(onceFunc(10))  // => should log 6
// console.log(onceFunc(9001))  // => should log 6


// CHALLENGE 5
function after(count, func) {
	let counter = 0
	return () => {
		counter += 1
		if (counter >= count) {
			return func()
		}
	}
}

// const called = function() { console.log('hello') }
// const afterCalled = after(3, called)
// afterCalled() // => nothing is printed
// afterCalled() // => nothing is printed
// afterCalled() // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait, ...args) {
	return () => {
		setTimeout(() => func(...args), wait)
	}
}

// const delayGreeting = delay((name) => console.log('hey, ', name), 1000, 'Bogdan')
// delayGreeting()

// CHALLENGE 7
function rollCall(names) {
	let arrIndex = 0
	return () => {
		if(arrIndex >= names.length) {
			console.log('Everyone Accounted For')
		} else {
			console.log(names[arrIndex])
		}
		arrIndex++
	} 
}

// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
	const password = magicWord
	let output = {}
	return arg => {
		if(password !== arg) {
			output = {
				...output, 
				[arg]: func(arg)
			}
      
			return output[arg]
		}
    
		return output
	}
}


// const multiplyBy2 = function(num) { return num * 2 }
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo')
// console.log(multBy2AndLog(2)) // => should log 4
// console.log(multBy2AndLog(9)) // => should log 18
// console.log(multBy2AndLog('boo')) // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
	let arrIndex = -1
	const resetArrIndex = () => arrIndex = 0
	const incrementArrIndex = () => arrIndex++
  
	return () => {
		if(arrIndex < array.length - 1) {
			incrementArrIndex()    
		} else {
			resetArrIndex()
		}
    
		return array[arrIndex]
	}
}


// const threeDayWeekend = ['Fri', 'Sat', 'Sun']
// const getDay = cycleIterator(threeDayWeekend)
// console.log(getDay()) // => should log 'Fri'
// console.log(getDay()) // => should log 'Sat'
// console.log(getDay()) // => should log 'Sun'
// console.log(getDay()) // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
	return (...args) => {
		return func(arg, ...args)
	}
}

// const subtract = function(big, small) { return big - small }
// const subFrom20 = defineFirstArg(subtract, 20)
// console.log(subFrom20(5)) // => should log 15


// CHALLENGE 11
function dateStamp(func) {
	const today = new Date()
	return (...args) => {
		return {
			date: today.getDate(),
			output: func(...args)
		}
	}
}

// const stampedMultBy2 = dateStamp(n => n * 2)
// console.log(stampedMultBy2(4)) // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)) // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
	let history = []
	return (str1 = '', str2 = '') => {
		if (str1 && str2) {
			history.push({ [str1]: str2 })
		}
    
		if(!str2) {
			let censoredStr = str1
			history?.forEach(pair => {
				censoredStr = censoredStr.replace(Object.keys(pair)[0], Object.values(pair)[0])
			})
    
			return censoredStr
		}
	}
}

// const changeScene = censor()
// changeScene('quick', 'slow')
// changeScene('dogs', 'cats')
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')) // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
	let privateSecret = secret
	return {
		getSecret: () => privateSecret,
		setSecret: newSecret => privateSecret = newSecret,
	}
}

// const obj = createSecretHolder(5)
// console.log(obj.getSecret()) // => returns 5
// obj.setSecret(2)
// console.log(obj.getSecret()) // => returns 2


// CHALLENGE 14
function callTimes() {
	let called = 0
	return () => {
		called++
		console.log(called)
	}
}

// let myNewFunc1 = callTimes()
// let myNewFunc2 = callTimes()
// myNewFunc1() // => 1
// myNewFunc1() // => 2
// myNewFunc2() // => 1
// myNewFunc2() // => 2


// CHALLENGE 15
function russianRoulette(num) {
	let runs = 0
	return () => {
		runs++
		if(runs <= num - 1) {
			return 'click'
		}

		if(runs > num) {
			return 'reload to play again'
		}

		return 'bang'
	}
}

// const play = russianRoulette(3)
// console.log(play()) // => should log 'click'
// console.log(play()) // => should log 'click'
// console.log(play()) // => should log 'bang'
// console.log(play()) // => should log 'reload to play again'
// console.log(play()) // => should log 'reload to play again'


// CHALLENGE 16
function average() {
	let numbers = []
	let average = 0
  
	return arg => {
		if(!arg) {
			return average  
		}

		if(typeof arg !== 'number') {
			return false
		}

		numbers.push(arg)
		const sum = numbers.reduce((acc, current) => acc + current, 0)
		average = sum / numbers.length
		return average
	}
}

// const avgSoFar = average()
// console.log(avgSoFar()) // => should log 0
// console.log(avgSoFar(4)) // => should log 4
// console.log(avgSoFar(8)) // => should log 6
// console.log(avgSoFar()) // => should log 6
// console.log(avgSoFar(12)) // => should log 8
// console.log(avgSoFar()) // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
	let arrIndex = -1
	return callback => {
		arrIndex++
		const callbackResult = callback(arrOfTests[arrIndex][0])
		if(callbackResult === arrOfTests[arrIndex][1]) {
			return true
		}

		return false
	}
}

// const capLastTestCases = []
// capLastTestCases.push(['hello', 'hellO'])
// capLastTestCases.push(['goodbye', 'goodbyE'])
// capLastTestCases.push(['howdy', 'howdY'])
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases)
// const capLastAttempt1 = str => str.toUpperCase()
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase()
// console.log(shouldCapitalizeLast(capLastAttempt1)) // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)) // => should log true


// CHALLENGE 18
function makeHistory(limit) {
	const UNDO = 'undo'
	let history = []

	return str => {
		if(!str) {
			return false
		}
		
		if(history.length > limit) {
			history.shift()
		}
		
		if(str === UNDO) {
			if(!history.length) {
				return 'nothing to undo'
			}
		
			const poppedStr = history.pop()
			return `${poppedStr} undone`
		}
		
		history.push(str)
		return `${str} done`
	}
}

// const myActions = makeHistory(2)
// console.log(myActions('jump')) // => should log 'jump done'
// console.log(myActions('undo')) // => should log 'jump undone'
// console.log(myActions('walk')) // => should log 'walk done'
// console.log(myActions('code')) // => should log 'code done'
// console.log(myActions('pose')) // => should log 'pose done'
// console.log(myActions('undo')) // => should log 'pose undone'
// console.log(myActions('undo')) // => should log 'code undone'
// console.log(myActions('undo')) // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
	const BLACKJACK = 21
	let count = 0
	
	return function DEALER(num1, num2) {
		let sum = num1 + num2
		let isBust = false
		let isFirstRun = true

		if(count > array.length) {
			return 'game over, no more cards'
		}

		return function PLAYER() {
			if(isBust) {
				return 'you are done!'
			}
			
			if(isFirstRun) {
				isFirstRun = false
				return sum
			}

			count++
			sum = sum + array[count-1]

			if(sum > BLACKJACK) {
				isBust = true
				return 'bust'
			}

			return sum
		}
	}
}
  


// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11])

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5)
// console.log(i_like_to_live_dangerously()) // => should log 9
// console.log(i_like_to_live_dangerously()) // => should log 11
// console.log(i_like_to_live_dangerously()) // => should log 17
// console.log(i_like_to_live_dangerously()) // => should log 18
// console.log(i_like_to_live_dangerously()) // => should log 'bust'
// console.log(i_like_to_live_dangerously()) // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()) // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2)
// console.log(i_TOO_like_to_live_dangerously()) // => should log 4
// console.log(i_TOO_like_to_live_dangerously()) // => should log 15
// console.log(i_TOO_like_to_live_dangerously()) // => should log 19
// console.log(i_TOO_like_to_live_dangerously()) // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()) // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()) // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7)
// console.log(i_ALSO_like_to_live_dangerously()) // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()) // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()) // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()) // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()) // => should log 'you are done!

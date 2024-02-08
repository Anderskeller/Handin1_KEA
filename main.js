package com.example.transformarr

fun main () {
    // ======== Exercise 1 ========== //
    isOldEnough()

    // ======== Exercise 2 ========== //
    println("this is the maximum number ${getMaximum(10, 20, 5)}")
    println("this is the minimum number ${getMinimum(10, 20, 5)}")

    // ======== Exercise 3 ========== //
    println("this is the average is ${calculateAverage(10, 3, 20)}")

    // ======== Exercise 4 ========== //
    val cprNumber = "3102031234"
    val isValid = isCprValid(cprNumber)
    println("Is CPR valid? $isValid")

    // ======== Exercise 5 ========== //
    fizzBuzz()

    // ======== Exercise 6 ========== //
    nameSplitter()

    // ======== Exercise 7 ========== //
    val grade = 69
    val letterGrade = calculateGrade(grade)
    println("Letter grade: $letterGrade")

    // ======== Exercise 8 ========== //
    val words = listOf("IT-Arkitektur", "Fodbold", "FCK", "Shape", "Snøfler")
    val minLength = 6
    val filteredWords = filterWordsByLength(words, minLength)
    println("Words with length greater than or equal to $minLength: $filteredWords")
}

//1.
//A person is elligible to vote if his/her age is greater than or equal to 18. Define a method to find out if he/she is elligible to vote.
// Let the user input their age.
fun isOldEnough () {
    println("Enter your your age")
    val age: Int = readln()!!.toInt()

    if (age >= 18) {
        println("You are elligible to bote")
    } else {
        println("You are not elligible to vote")
    }
}


//2.
//Define two functions to print the maximum and the minimum number respectively among three numbers
fun getMaximum(a: Int, b: Int, c: Int): Int {
    return maxOf(a, b, c)
}
fun getMinimum(a: Int, b: Int, c: Int): Int {
    return minOf(a, b, c)
}


//3.
//Write a Kotlin function named calculateAverage that takes in a list of numbers and returns their average.
fun calculateAverage(a: Int, b: Int, c: Int): Double {
    val listOfNumbers: List<Int> = listOf(a, b, c)
    return listOfNumbers.average()
}
//4.
//Write a method that returns if a user has input a valid CPR number.
//A valid CPR number has:
//10 Digits.
//The first 2 digits are not above 31.
//The middle 2 digits are not above 12.
//The method returns true if the CPR number is valid, false if it is not.
fun isCprValid(cpr: String): Boolean {
    if (cpr.length != 10) {
        println("CPR length is not valid")
        return false
    }

    val firstDigits = cpr.substring(0, 2).toIntOrNull()
    val middleDigits = cpr.substring(2, 4).toIntOrNull()

    if (firstDigits == null || middleDigits == null) {
        println("Invalid characters in day or month part")
        return false
    }

    if (firstDigits > 31 || middleDigits > 12) {
        println("Day or month part is out of range")
        return false
    }

    println("CPR is valid")
    return true
}

//5.
//Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
fun fizzBuzz() {
    for (i in 1..100) {
        when {
            i % 3 == 0 && i % 5 == 0 -> println("FizzBuzz")
            i % 3 == 0 -> println("Fizz")
            i % 5 == 0 -> println("Buzz")
        else -> println(i)
        }
    }
}

//6.
//Write a program that takes your full name as input and displays the abbreviations of the first and middle names except the last name which is displayed as it is.
//For example, if your name is Robert Brett Roser, then the output should be R.B. Roser. Or Benjamin Dalsgaard Hughes will be B.D. Hughes
fun nameSplitter() {
    val fullName = "Anders Keller"
    val nameParts = fullName.split(" ")

    var abbreviation = ""

    for (i in 0 until nameParts.size - 1) {
        abbreviation += nameParts[i].first().toUpperCase() + "."
    }
    abbreviation += " " + nameParts.last()

    println(abbreviation)
}


//7.
//Write a program that takes a numerical grade (0-100) as input and prints out the corresponding american letter grade.
// Implement a function calculateGrade that takes an integer parameter representing the grade and returns a string representing the letter grade according to the following scale:
//90-100: "A"
//80-89: "B"
//70-79: "C"
//60-69: "D"
//Below 60: "F"
fun calculateGrade(grade: Int): String {
    return when (grade) {
    in 90..100 -> "A"
        in 80..89 -> "B"
        in 70..79 -> "C"
        in 60..69 -> "D"
    else -> "F"
    }
}

//8.
//Write a Kotlin function named filterWordsByLength that takes in a list of strings and a minimum length, and returns a list containing only the words that have a length greater than or equal to the specified minimum length.
//Use filter function and lambda expressions
fun filterWordsByLength(words: List<String>, minLength: Int): List<String> {
    return words.filter { it.length >= minLength }
}

squaredNumber.js Notes:

I never took notes for the first one.


lostAndNoMap.js Notes:

So in this one I am given an array and I need to double the numbers in it.
I decided to not use map so I could practice using the fundamental parts of programming.


MovingZerosToTheEnd.js Notes:

Write some code that takes an array and moves all the zeros to the end of the array
This one was actully too easy so I didn't end up writing much about it.


stringEndsWith.js Notes:

I need to make a function that returns true if the first string argument passed to it ends with the second argument.
So I ended up making two functions to do this, one that used the endsWith method, and another that using
substring and the length of both strings to tell the substring where to cut the og string to make the new one
that I compared and returned a boolean.


binaryAddition.js Notes:

So I learned from this that I need to look back at my notes and pseudocode if I am confused to why something isn't
working right
I also learnd that usinsg .toString(2) gives you the binary of a number becasue it makes it a base of 2 in that case.
They talk about it kinda in the docs if you remember that binary is base 2 then you will see that you can tell it the
base of the radix (it can a any number between 2 and 36 (including those numbers of course)).


betterThanAverage.js Notes:

We are given an array that we need to add up all the number and compare it to our test score and it needs to return
true of false if we are better than the average person in the class
I think there is a method to recude the array to one number, but if I can't find it I'll just loop through it and
then add all the numbers together. So I ended up just using the reduce method because I need more practice with it


areYouPlayingBanjo.js Notes:

So we need to find a way to look at if the first letter of the input name is an r (lower or upper case), and
we need to return userName + " plays banjo" (if the name starts with an r/R) or
userName + " does not play banjo" (if the name starts with something that isn't an r/R).
So for this I just make a variable of the first letter of the name argument and used toLowerCase() on it, and then
I used it in an if statement to check if the name started with an r(both lower case and upper case that is) or not.
And I returned either `${name} plays banjo` or `${name} does not play banjo`

exesAndOhs.js Notes:

Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. The string can contain any char.


abbreviateTwoWordName.js Notes:

So I thought I was working with two strings instead of one so my notes and psuedocode looked like I was thinking that
I however realized it wasn't too hard to change the string into "two different ones' by using split on it and,
cutting it where the space is and just acessing the items by using indexes and then use indexes again to access just
one letter from each. I also turned them both to upper case because I think that is what looks best plus I think that
is the output we need for this one too.


highestAndLowest.js Notes:

So I need to search the string for the highest and lowest number in the string and return a string with
both those numbers in it separated by a space.


sumTwoLowestPositiveIntegers.js Notes:

So we are given an array with at least 4 positive numbers and float point numbers, and I need to add
the two lowest numbers in the array together and return that value. Look to my psuedocode for seeing how I did this
one.


clockWork.js Notes:

So I need to calculate the amount of time since midnight in milliseconds. They have aleady done some of the math for me.
So I just need to add it to the function. This one was very tough for me, but I learned a lot from it. Like how I should
have just converted them all into seconds and then added those all together and then converted that into miliseconds
so in that way I wouldn't have to worry about if my math was right or wrong, and if I was checking the passed in
arguments right or not. But my biggest take away was that sometimes problems feel to hard to do, but if you just take
your time and look through and you can do it.


cockroach.js Notes:

On this lesson I need to convert kilometers per hour to centimeters per hour.
So I did mostly well I just struggled a bit because of the endless noise from the deck guys so it made it hard to think
deeply about the problem. But after some time I realized that I had the math backwards and that was my problem lol


trolls.js Notes:

So for this one I need to remove all the vowels from the string. This would be simple with a if... else
kinda thing, but I think imma try to use a regex. I should have rewrote my psuedocode as I was doing more coding to
get a better mental model of what I was doing.


reversList.js Notes:

I did this one quickly, I just used the reverse method on the referenced array in the function and returned it.


binaryArrayToNumber.js Notes:

This code returns a number from the binary array version of that number. I had to look in my notes to remember how
to do this. I was using the method to get the binary number from a number rather than the other way around. So this
was a good reminder for how this all works.


sortArrayByStringLength.js Notes:

I did this one the other day, and I don't remember my thought procces with it tbh.


reverseWords.js Notes:

I learned a lot from this. I learned how you can use map to put all elements in an array into their own arrays inside
of the original array. I also learned how you can't reverse a string, you have to reverse the elements of an array to
reverse a string than reconvert the array back into a string with join.


mumbling.js Notes:

I really should have wrote the notes for this as I did it. I need to do that with
all my problems after this batch of problems. This does follow a pattern, the
pattern is that whatever index you are at is how many extra characters you will
need to add. So index 0 adds none but index 2 would add two more characters.
You also have to keep in mind that each og letter is turned into a capped letter no
matter what. We also use join at the end to put the dashes between each of he strings
(I didn't explain the whole array of strings thing, but yeah. This is the short way
to explain of some the stuff that is going on here)


descendingOrder.js Notes:

This is pretty simple, I turn the number into a string. Then split each at each
character and put them in an array. After that we use, sort on it and make it a
descending ordered list. Then we turn them back into a Number than join them together


oppositeNum.js Notes:

All you do in this one is check if number is === to -number if so then return
+number, and the else clause will return -number in cased that number === number.
because in cases that number isn't === -number it is === to just number (aka +number)


greet.js Notes:

This one checks to see if name and owner are === if so it displays the greeting
'Hello boss' if not it will return 'Hello guest'


sentenceSmash.js Notes:

This function takes an array of string and joins them together and puts spaces between
each word as it does it.


countSheeps.js Notes:

All I had to end up doing for this one was add an if statemnet that checked for
truthy values and then incremented the new variable 'count'. It is also far better
to use count instead of trying to use index to find you amount of sheep. Also, this
problem reminded me that you need to put the if statement inside a wile loop above the
incrementing of the index. Because if you don't you will not get the last iteration
checked in the if statemnet because the index will have already met its end condition.


sumOddOrEven.js Notes:

I used reduce to add all the numbers together in the
passed in array. Then I used an if statement to see if the sum of
the array's numbers added together was even or odd and from that I
returned even or odd respectively. You can also do this with just a for loop
too. I commented how you would do it in the code under the og problem


countByX.js Notes:

So I just need to multiply x by 1 for the first iteration, then I increment 1 so it becomes 2, continue incrementing
till that number matches n (because n is m stop point). I also have to push each of these multiples to the array z on
each iteration.


grasshopperSummation.js Notes:

This problem wasn't too bad I just needed to use the parameter num as my end condition and to increment an index number
that I started at 0 inside of a for loop and to add sum + index till the end condition is met.


bmi.js Notes:

The only think I was unsure about was `(height ** 2)` becasue, the math that codeWars gave me for this problem didn't
use ( ). So I was unsure if I put them in the right place or not. But I did put them in the right place. You can do it
without them too, but they make the code look better, and it makes it more understandable.


shortestWordLength.js Notes:

This one was pretty straight forward, I just split the string at each space and set a string to index 0
and compared each string in the array to the string that I assigned to index 0 of the array and if
the string in the array was shorter I reassign it in the if statement in the loop.


filterList.js Notes:

All I do for this is iterate through the array that is passed in the functions and the I wrote an if statement that
checks if the element in the array is an integer or not. If it is I just a copy of it to the numArr, and at the end
I return the numArr after the loop is done iterating


regexValidatePIN.js Notes:

I wrote two ways to do this code as you can see. My first one was the one on top, but I wanted to see how an if else
statement version would work/look.


basicMathematicalOperations.js Notes:

This one was simple I just looked to see what the operation parameter was passed as an argument and then
do the operation on value1 and value2 depending on what it was.


fakeBinary.js Notes:

So for this one I am passed a copy of the string number into the function. I then turn it into a string with .split
and make it so there is one value for every character in the og string. I then declare and internalize the variable
fakeBinaryArr to an empty array. I when iterate through the array I made from usinng split, and in the loop I check
if the value at each index is less than 5, or equal to or higher than it. In the of it being lower I push '0' to
fakeBinaryArr and it the case that it is higher or equal to 5 I push '1' to fakeBinaryArr. At the end of the function
I call join on fakeBinaryArr and join all the characters together to create a string instead of an array.


sumMixedArray.js Notes:

This one was simple, I copy the array and change all the values it be of number type. Then I iterate through the new
array and added each value to my sum variable and then I return sum


isSquare.js Notes:

For this problem I just got the square root of a number and checked to see if that value wasn't a whole number.
In that case I return false, in the case that it is a whole number I return true. On my second way to do this problem
I rewrote some of the code so that we are checking if it is a whole number rather and if it isn't a whole number.


uniqueInOrder.js Notes:

So I needed to make a function to remove all the double values that stand right beside each other in either an array
or string, and the return value needed to be an array. So I started by making a helper function to make sure that
the values would always be arrays. Then from there I just needed to loop through the array and check if the values
beside each other weren't equal. I push the values to an empty array I made to hold all the values we were looking for.


returningStrings.js Notes:

I just wrote a template literal and put the parameter inside its placholder. Then I just returned that.


sumOfNumbers.js Notes:

So this problem ended up being harder than it should have been, because the test cases were not good, becasue a or b
should always be the low or high parameter number, and because I didn't write psuedocode for this one. But after I
failed a few times I learned more about the test cases then I changed some stuff failed again then I finally realized
a simple if statement would fix my problem I was having. The problem I was having was that the fact that both parameters
could be the high or low number and that made it hard to make a loop with them like that. So yeah, that is what I did.


countSheep.js Notes:

This one just took a little bit of iterating and concatenation.


squareNumberPlusSum.js Notes:

I square each number in the array and then added them all together and then return that value.


convertStringToNumber.js Notes:

This is just a simple string to number converting. I did it with Number(string).


terminalGame.js Notes:

This one wasn't hard it, only took me longer than it could have becasue my old code on this one was way off, and I
trusted it as a baseline.


openOrSenior.js Notes:

Last time I tried to do this I didn't notice that the input was actually an array of arrays. This time I noticed it
so I was about to do this problem after a little bit of rethinking about the problem. I also realized that the return
value is supposed to be a list of strings. All I ended up doing was iterating through the data array that was passed to
the function. Then I wrote a if statement to check if I should push 'Senior' or 'Open' to the membershipList array.


oppositesAttract.js Notes:

For this one I check if one of the parameters is even and if one is odd. If there is two evens or two odds it will
return false.

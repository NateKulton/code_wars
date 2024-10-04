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

So I thought I was working with two strings instead of one so I notes I psuedocode looked like I was thinking that
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

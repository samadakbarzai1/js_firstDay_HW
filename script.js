//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(arrayOFDogNames, string_of_dog){
    for(i in arrayOFDogNames){
       if(string_of_dog.search(arrayOFDogNames[i]) != -1){
            console.log("dog name found")
       }
       else{
            console.log("No Matchs")
       }
    }
}
console.log(findWords(dog_names, dog_string));




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
    let j = 0;
    while (j < arr.length)
    {
        if (j % 2 == 0){
            arr.splice(i,1,'Even');
        }
    }
    return arr;
    //code goes here
}

console.log(replaceEvens(arr));
<script>
//AlgoInd



//Function to use
Function sortArray(myArray){
	var permutation = 1;
	while(permutation == 1){
		//Initialyze at 0 that will change to 1 if nothing change 
		permutation = 0;
		//Sort Array Type ascendant Order
		for(i=0; i < myArray.length-1; i++){
			if(myArray[i]>myArray[i+1]){
				pemutation = 1;
				temp = myArray[i];
				myArray[i] = myArray[i+1];
				myArray[i+1] = temp;
			}
		}
	}
	//Return Array Order
	return myArray;
}




//Statement

//Var Numbers Verif if Integer ,between 0 to 9 & if 3 numbers aren't 0
//Prompt or Form to get the Numbers
var numb1 = 8;
var numb2 = 7;
var numb3 = 9;




//Processing
//Stock the numbers in Array and arrange
var myArray = [];
myArray[0] = numb1;
myArray[1] = numb2;
myArray[2] = numb3;

myArray = sortArray(myArray);


//Result



console.log(myArray);

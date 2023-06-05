//fails 2 test cases 

function timeInWords(h, m) {
    // Write your code here
    
let hours = [1,2,3,4,5,6,7,8,9,10,11,12];
let hwords = ['one','two','three','four','five','six','seven',
'eight','nine','ten','eleven','twelve'];


let minutes1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
,19,20,21,22,23,24,25,26,27,28,29,30];
let mwords1 = ['one','two','three','four','five','six','seven',
'eight','nine','ten','eleven','twelve','thirteen','fourteen','quarter','sixteen','seventeen', 'eighteen','nineteen','twenty',
'twenty one', 'twenty two', 'twenty three', 'twenty four', 
'twenty five', 'twenty six','twenty seven', 'twenty eight', 
'twenty nine', 'half'];


let minutes2 = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
46,47,48,49,50,51,52,53,54,55,56,57,58,59];
let mwords2 = ['thirty one','thirty two', 'thirty three','thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'fourty', 'fourty one', 'fourty two', 'fourty three', 'fourty four', 'quarter', 'fourteen','thirteen',
'twelve', 'eleven', 'ten', 'nine', 'eight', 'seven',
'six', 'five', 'four', 'three', 'two', 'one'] ;




 
let res = '';


// create for loop to get the hour
for (let i = 0; i < hours.length ; i++){
    for (let j = 0; j < hwords.length ;j++){
        if (h == hours[i] && i == j){
            res = hwords[j]
        }
        else if (m >= 45 && h == hours[i]   ){
            res = hwords[j-hours[i]-1]
        }
        
    }
}




let res2 = '';


for (let i = 0; i < minutes1.length ; i++){
    for (let j = 0; j < mwords1.length ;j++){
        if (m == minutes1[i] && i == j){
            res2 = mwords1[j] + ' ' + 'minutes' + ' ' + 'past'
        }
        else if (m == 1) {
            res2 = 'one minute past'
        }
        else if (m == 15){
            res2 = 'quarter past'
        }
        else if (m == 30){
            res2 = 'half past'
        }
        else if (m == 0) {
            res2 = ['o\'' +' '+ 'clock']  
        }
    }
}




let res3 = '';


for (let i = 0; i < minutes2.length ; i++){
    for (let j = 0; j < mwords2.length ;j++){
        if (m == minutes2[i] && i == j){
            res3 = mwords2[j] + ' ' + 'minutes' + ' ' + 'to'
        }
        else if (m == 45){
            res3 = 'quarter to'
        }
       
    }
}


if (m == 0) {
    return res + ' ' + res2
}
else {
return res3 + res2 + ' ' + res
}


}

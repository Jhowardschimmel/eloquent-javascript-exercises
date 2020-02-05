/* Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

let triangleString = "";
for (let i = 0; i < 7; i++) {
    triangleString+="#";
    console.log(triangleString);   
}
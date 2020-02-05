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
for (let i = 1; i < 8; i++) {
    triangleString+="#";
    console.log(triangleString);   
}
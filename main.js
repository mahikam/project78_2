var names=["The Mamidipalli Family","Sanjay Mamidipalli","Madhavi Basawaraju","Sanvi Mamidipalli","Mahika Mamidipalli"];
var fimgs=["familycover2.jpg","familydad.jpg","familymom.jpg","familysister.jpg","familyme.jpg"];
var i=0;
function nextslide() {
    i++;
    var numberfmembers=3;
    var updatedimg=fimgs[i];
    var updatednames=names[i];
    if (i>numberfmembers) {
        i=0;
    }
    document.getElementById("familyname").innerHTML=updatednames;
    document.getElementById("familyimg").src=updatedimg;
}
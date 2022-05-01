var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/7Z5F5TP3/IMG-9139.jpg", "https://i.postimg.cc/9MHkDM4v/IMG-7584.jpg" , "https://i.postimg.cc/Y0KWFvQB/Mamma.jpg", "https://i.postimg.cc/Yq4S7rF1/IMG-20211206-WA0005-1.jpg"];
var names = ["Family Book","Uma Ray", " Ayesha Ganguly", "Spice Ray", "Anish Ray"];
var i = 0;
function update()
{
  i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
        i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

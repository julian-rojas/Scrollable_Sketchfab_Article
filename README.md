# Scrollable_Sketchfab_Article
copying the scripts for sketchfab's scrollable article experiment!

To utilize this template: 

1. Open "index.html" to edit the copy. 
  a. <Article__Title> can be edited to change the title, and each <p class = "article_body" is another section of text.
2.  open "app.js" in js/app.js. 
  b. At the top (line 1) the "var urlid" is how we change the model being displayed. On this example, it reads "41da82cc80cf4658f70213d47077905'. 
     Any sketchfab page will have this number at the tail end of its URL. For example, this "https://sketchfab.com/3d-models/camera-limits-demo-van-gogh-bedroom-in-arles-daefab319a584e559443e39ff05e84fa" article's ID number is 'daefab319a584e559443e39ff05e84fa'. If you replace the "var Urlid = " with "var urlid = 'daefab319a584e559443e39ff05e84fa' it will change the object in the scene to the one you have selected. 
3. to add multiple models, try creating an iframe with a new page for each section of text. That's all I've got for now! :)     

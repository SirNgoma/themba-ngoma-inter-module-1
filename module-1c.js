/**
 * Create, open, and read from a text file: 
 Text content of an app that won the Best Campus Cup in 2021, 
 its developer, category, and institution represented. 
 * 
 */
 function campusCup(){
    
     var f = require('fs');
     var filename = 'campusCup2021.txt';
     
     //create
     f.appendFile(filename,
     'App name: UniWise \ndeveloper: OGO Studio \ncategory: Education \ninstitution represented: ',
     function(error){
	if(error) throw error;
	
	
});
     
     //open and Read
     
     f.readFile(filename, 
      function(error, data){
	if(error) {return console.error(error);}
	
	console.log(data.toString());
	});
     
     
     
   
     
}

campusCup();
 
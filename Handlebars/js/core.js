$(window).load(function(){
var source =  $("#some-template").html(); 
var template = Handlebars.compile(source); 

var data = { 
    users: [ { 
        person: {
            firstName: "Robert", 
            lastName: "Gabriel"
        },
        jobTitle: "Leggo",
        twitter: "wobertg" 
    }, { 
        person: {
            firstName: "Wobert", 
            lastName: "Gabriel"
        },
        jobTitle: "Leggo",
        twitter: "wobertg" 
    }, { 
        person: {
            firstName: "Zobert", 
            lastName: "Gabriel"
        },
        jobTitle: "Leggo",
        twitter: "wobertg" 
    }]
}; 

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

    

    
$('#middle').append(template(data));
});//]]> 

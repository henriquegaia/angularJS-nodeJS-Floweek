angular.module("Floweek").filter("name", function(){
   return function(input){
       var nameArr = input.split(" ");
       var nameArrFormat = nameArr.map(function(name){
          return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
       });
       return nameArrFormat.join(" ");
   };
});

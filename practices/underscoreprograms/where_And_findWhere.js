var _ = require('underscore');

var people=
   [ {'name':'kalyan','age':23},
   {'name':'sandeep','age':25},
   {'name':'sudheer','age':23}];

   // _where method
    console.log("_where  Method");
    console.log(_.where(people,{'age':23}));

   // _findWhere method
    console.log("_findWhere Method");
    console.log(_.findWhere(people,{'age':23}));
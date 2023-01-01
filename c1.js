student=[
        {
        name:"kasim",rollno:1,sex:"male",madallii:{battallee:10,shakd:14,abbaltii:8
          
        },
       idama:function(){
            return madallii.battallee + madallii.shakd + madallii.abbaltii;

                    }
        }
        ]
        
 document.getElementById("output").innerHTML += student[0].madallii.battallee;



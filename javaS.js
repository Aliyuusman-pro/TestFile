function  MyTodo_List(...arr){
    return arr;

}
//.log(MyTodo_List());

let MyData = [
{
  Task:"Reading",
  item:["English","Mathematics"],
  date:"1-12-2022"
},
{
Task : "Sleeping",
item:[],
date:"monday"
}
]

 function AddTask(Task,item,date){
MyData.push(
      {Task,item,date}
  );
 }

/*MyData.push({Task:"fighting",item:["knife"],date:"23-05-2024"});
console.log(MyData);*/
AddTask("fighting","knife","23-05-2024");
AddTask("fighting","knife","23-05-2025");
//delete MyData[0].Task
console.log(MyData[1].Task);
 function Delet(key){
for(i = 0; i <MyData.length; i++){
    if(key == MyData[i].Task){
        MyData[i] = null;
    /*delete  MyData[i].Task;
    delete MyData[i].item;
    delete MyData[i].date;*/
}
}
}
 console.log(MyData);
 console.log("End of the prog.");
 const key = "fighting";
 Delet(key);
 AddTask("fighting","knife","23-05-2025");
 console.log(MyData);
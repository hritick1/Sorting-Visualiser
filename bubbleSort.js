var rs,num;
var squares=[];

async function bubble_sort(){
    var grid=document.querySelector(".grid");
    var timeout=1000;
    rs=document.getElementById("rs").value;
    var num=rs.split(",");




var table=document.createElement('table');
table.classList.add("table","flex-container");
var  tbody=document.createElement('tbody');
var row=document.createElement('tr');
grid.appendChild(table);


  

for(let i=0;i<num.length;i++){

     var column=document.createElement('td');
     column.setAttribute('id',"data"+[i]);
     var text=document.createTextNode(num[i]);
     column.appendChild(text);
     row.appendChild(column);

}
tbody.appendChild(row);
table.appendChild(tbody);








    document.getElementById("rs").disabled = true;
    document.getElementById('calcbtn1').disabled = "disabled";
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    for (let i = 0; i < num.length - 1; i++) {
        for (let j = 0; j < (num.length - i - 1); j++) {
            await sleep(300)
            if (parseInt(document.getElementById("data" + [j]).innerHTML) > parseInt(document.getElementById("data" + [j + 1]).innerHTML)) {
                if (j > 0) {
                    document.getElementById("data" + [j - 1]).classList.remove('exchange');
                    document.getElementById("data" + [j]).classList.remove('exchange');

                }
                document.getElementById("data" + [j]).classList.add('exchange');
                document.getElementById("data" + [j + 1]).classList.add('exchange');
                await sleep(300)
                let temp = document.getElementById("data" + [j]).innerHTML;
                document.getElementById("data" + [j]).innerHTML = document.getElementById("data" + [j + 1]).innerHTML;
                document.getElementById("data" + [j + 1]).innerHTML = temp;
                await sleep(300)
                if (j === num.length - i - 2) {
                    await sleep(1000)
                    document.getElementById("data" + [j]).classList.remove('exchange');
                    document.getElementById("data" + [j + 1]).classList.remove('exchange');
                    


                    await sleep(300)
                }

            }
            else {if(j>0){
                document.getElementById("data" + [j - 1]).classList.remove('exchange');
                document.getElementById("data" + [j]).classList.remove('exchange');
            }}



        }
    }
    
    


}
function cancel(){
    window.location.reload();
   
}
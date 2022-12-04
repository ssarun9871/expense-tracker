
    let amt = document.getElementById('amt');
    let description = document.getElementById('desc');
    let category = document.getElementById('category');
    let btn = document.getElementById('submit');
    let display = document.getElementById('display');
    
    btn.addEventListener('click',addExpense);
  
    
    function addExpense(e){
        
        let id=0;
        //It will prevent the form from submitting if the amt and description fields are empty
        if(amt.value=="" || description.value=="") {return false};
    
        if (localStorage.length==0){
            id=0;
        }
        else {
            let n = localStorage.length-1;//n = index of last record
            id=+(localStorage.key(n))+1;//id = (key of last record) + 1
            //'+' sign is to convert string into number
        };

        let obj = {
            amt:amt.value,
            desc:description.value,
            cat : category.value
        };

    

        let exp = `${amt.value}-${description.value}-${category.value}`;
        let exp1 = JSON.stringify(obj);
        let  p=`<li id="${id}">${exp}  <button onClick="deleteExpense('${id}')">Delete Expense</button>  <button onClick = "editExpense('${id}')">Edit Expense</button></li>`;
    
        display.innerHTML=display.innerHTML+p;
        localStorage.setItem(id,exp1);
        id++;
        e.preventDefault();
    }

    function deleteExpense(id){
    let parentNode = document.querySelector('#display');
    let childNode = document.getElementById(id);
    parentNode.removeChild(childNode);

    localStorage.removeItem(id);
    
    }

    function editExpense(id){
      
        let amn = JSON.parse(localStorage.getItem(id)).amt;
        let des = JSON.parse(localStorage.getItem(id)).desc;
        let catt = JSON.parse(localStorage.getItem(id)).cat;

        amt.value  = amn;
        description.value = des;
        category.value = catt;
        deleteExpense(id);
        return false;
    
    }
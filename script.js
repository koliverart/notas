const adicionar = document.getElementById("adicionar");
const notas = document.getElementById("notas");



criarnota();
loadnote();




//Funções
function criarnota(){

    adicionar.addEventListener("click",function(){
    const container = document.createElement("div");
    container.setAttribute("id","container");

    const containerchk = document.createElement("div");
    containerchk.setAttribute("id","containerchk");

    const headernota = document.createElement("div");
    headernota.setAttribute("id","headernota");

    const textarea = document.createElement("textarea");

    const apagar = document.createElement("button");
    apagar.setAttribute("id","apagar");

    const expandir = document.createElement("input");
    expandir.type = "checkbox";
    expandir.setAttribute("id","expandir");

    const exp = document.createElement("button");
    exp.setAttribute("id","exp");
    exp.innerText = "-";

    const check = document.createElement("button");
    check.setAttribute("id","check");
    check.innerText = "✔";

    containerchk.append(expandir,check,exp);

    apagar.innerText = "X";

    headernota.append(containerchk,apagar);

    container.append(headernota, textarea);

    notas.append(container);


      //TextArea
      textarea.addEventListener("blur", function(){
        let texts = textarea.value;

        textarea.style.fontFamily = "Arial";
        textarea.style.fontSize = "20px";
        check.style.display = "none";

        //Lógica para Salvar
        if(localStorage.data != null){
            let list_storage = JSON.parse(localStorage.data);
            list_storage.push(textarea.value);
            localStorage.data = JSON.stringify(list_storage);
        }else{
          localStorage.data = "[]";
        }

        console.log(localStorage.data);

      });

      textarea.addEventListener("focus", function(){
        textarea.style.fontSize = "15px";
        check.style.display = "block";
      });


    //Funções dos Botões
      apagar.addEventListener("click",function(){
        let list_storage = JSON.parse(localStorage.data);

        //list_storage.splice(list_storage.indexOf(textarea.value),1);
        container.remove();
      });

    /////////////////////////////////////////
      exp.addEventListener("click",function(){
      if(expandir.checked == true){
         expandir.checked = false;
      }else if(expandir.checked == false){
        expandir.checked = true;
      }

      if(expandir.checked == true ){
        textarea.style.width = "500px";
        textarea.style.height = "500px";
        headernota.style.width = "500px";
      }else{
        textarea.style.width = "200px";
        textarea.style.height = "200px";
        headernota.style.width = "200px";
      }


      });

      //////////////////////////////////////////////
      check.addEventListener("click",function(){
        textarea.onblur();
      })

      });


};// Final função criar nota;

function savenote(){

  if(localStorage.data != null){
      let list_storage = JSON.parse(localStorage.data);
      list_storage.push(textarea.value);
      localStorage.data = JSON.stringify(list_storage);
  }else{
    localStorage.data = "[]";
  }
};

function loadnote(){
  let list_storage = JSON.parse(localStorage.data);

  list_storage.forEach(function(i){

    const container = document.createElement("div");
    container.setAttribute("id","container");

    const containerchk = document.createElement("div");
    containerchk.setAttribute("id","containerchk");

    const headernota = document.createElement("div");
    headernota.setAttribute("id","headernota");

    const textarea = document.createElement("textarea");
    textarea.value = i;
    const apagar = document.createElement("button");
    apagar.setAttribute("id","apagar");

    const expandir = document.createElement("input");
    expandir.type = "checkbox";
    expandir.setAttribute("id","expandir");

    const exp = document.createElement("button");
    exp.setAttribute("id","exp");
    exp.innerText = "-";

    const check = document.createElement("button");
    check.setAttribute("id","check");
    check.innerText = "✔";

    containerchk.append(expandir,check,exp);

    apagar.innerText = "X";

    headernota.append(containerchk,apagar);

    container.append(headernota, textarea);

    notas.append(container);

  })
};

console.log(localStorage.data);

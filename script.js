let list = document.getElementById("list");
list.addEventListener("change", (e)=>{
    let periodInterval = document.getElementById("list");
    let interval = periodInterval.value;
    let inputContainer = document.querySelector(".input-cont");

    if(interval == ""){
        let inputs = document.querySelectorAll(".input");
        for (let element of inputs) {
            element.remove()
        }
    }
    if(interval == "monthly"){
        let inputs = document.querySelectorAll(".input");
        for (let element of inputs) {
            element.remove()
        }
        for (let i=0; i<=0; i++) {
            let newInput = document.createElement("input");
            newInput.classList.add("input");
            newInput.setAttribute("placeholder", `Inflacion del ${[i+1]}° mes`);
            newInput.setAttribute("id", `month${[i+1]}`);
            inputContainer.appendChild(newInput);
        }
    }
    if(interval == "bimester"){
        let inputs = document.querySelectorAll(".input");
        for (let element of inputs) {
            element.remove()
        }
        for (let i=0; i<2; i++) {
            let newInput = document.createElement("input");
            newInput.classList.add("input");
            newInput.setAttribute("placeholder", `Inflacion del ${[i+1]}° mes`);
            newInput.setAttribute("id", `month${[i+1]}`);
            inputContainer.appendChild(newInput);
        }
    }
    if(interval == "trimester"){
        let inputs = document.querySelectorAll(".input");
        for (let element of inputs) {
            element.remove()
        }
        for (let i=0; i<3; i++) {
            let newInput = document.createElement("input");
            newInput.classList.add("input");
            newInput.setAttribute("placeholder", `Inflacion del ${[i+1]}° mes`);
            newInput.setAttribute("id", `month${[i+1]}`);
            inputContainer.appendChild(newInput);
        }
    }
    if(interval == "quarter"){
        let inputs = document.querySelectorAll(".input");
        for (let element of inputs) {
            element.remove()
        }
        for (let i=0; i<4; i++) {
            let newInput = document.createElement("input");
            newInput.classList.add("input");
            newInput.setAttribute("placeholder", `Inflacion del ${[i+1]}° mes`);
            newInput.setAttribute("id", `month${[i+1]}`);
            inputContainer.appendChild(newInput);
        }
    }
    if(interval == "semester"){
        let inputs = document.querySelectorAll(".input");
        for (let element of inputs) {
            element.remove()
        }
        for (let i=0; i<6; i++) {
            let newInput = document.createElement("input");
            newInput.classList.add("input");
            newInput.setAttribute("placeholder", `Inflacion del ${[i+1]}° mes`);
            newInput.setAttribute("id", `month${[i+1]}`);
            inputContainer.appendChild(newInput);
        }
    }
})


const btnCalc = document.getElementById("btn-calculate");
btnCalc.addEventListener("click", ()=>{
    let period = document.getElementById("list").value;
    if(period == "monthly"){
        month();
    } else if(period == "bimester"){
        bimester();
    } else if(period == "trimester"){
        trimester();
    } else if(period == "quarter"){
        quarter();
    } else if(period == "semester"){
        semester();
    } else {
        noData();
    }

    function noData(){
        return alert("Seleccionar un período de tiempo");
    }

    function month(){
        let ipc = document.getElementById("month1").value;
        let anualProyected;
        if(ipc == ""){
            return alert("Falta informacion del primer mes");
        } else if(isNaN(ipc)){
            return alert("Solo numeros y puntos");
        }
        anualProyected = ((((1+(ipc /100)) **12) -1) *100);
        alert(`Inflacion mensual proyectada: ${anualProyected.toFixed(2)}%`);
    }

    function bimester(){
        let ipc1 = document.getElementById("month1").value;
        let ipc2 = document.getElementById("month2").value;
        let anualProyected1;
        let anualProyected2;
        let proyected;
        if(ipc1 == ""){
            return alert("Falta informacion del primer mes");
        } else if(ipc2 == ""){
            return alert("Falta informacion del segundo mes");
        }
        if(isNaN(ipc1) || isNaN(ipc2)){
            return alert("Solo numeros y puntos");
        }
        anualProyected1 = ((((1+(ipc1 /100)) **12) -1) *100);
        anualProyected2 = ((((1+(ipc2 /100)) **12) -1) *100);
        proyected = (anualProyected1 + anualProyected2) / 2;
        alert(`Inflacion del bimestre proyectada: ${proyected.toFixed(2)}%`);
    }

    function trimester(){
        let ipc1 = document.getElementById("month1").value;
        let ipc2 = document.getElementById("month2").value;
        let ipc3 = document.getElementById("month3").value;
        let anualProyected1;
        let anualProyected2;
        let anualProyected3;
        let proyected;
        if(ipc1 == ""){
            return alert("Falta informacion del primer mes");
        } else if(ipc2 == ""){
            return alert("Falta informacion del segundo mes");
        } else if(ipc3 == ""){
            return alert("Falta informacion del tercer mes");
        }
        if(isNaN(ipc1) || isNaN(ipc2) || isNaN(ipc3)){
            return alert("Solo numeros y puntos");
        }
        anualProyected1 = ((((1+(ipc1 /100)) **12) -1) *100);
        anualProyected2 = ((((1+(ipc2 /100)) **12) -1) *100);
        anualProyected3 = ((((1+(ipc3 /100)) **12) -1) *100);
        proyected = (anualProyected1 + anualProyected2 + anualProyected3) / 3;
        alert(`Inflacion del trimestre proyectada: ${proyected.toFixed(2)}%`);
    }

    function quarter(){
        let ipc1 = document.getElementById("month1").value;
        let ipc2 = document.getElementById("month2").value;
        let ipc3 = document.getElementById("month3").value;
        let ipc4 = document.getElementById("month4").value;
        let anualProyected1;
        let anualProyected2;
        let anualProyected3;
        let anualProyected4;
        let proyected;
        if(ipc1 == ""){
            return alert("Falta informacion del primer mes");
        } else if(ipc2 == ""){
            return alert("Falta informacion del segundo mes");
        } else if(ipc3 == ""){
            return alert("Falta informacion del tercer mes");
        } else if(ipc4 == ""){
            return alert("Falta informacion del cuarto mes");
        } 
        if(isNaN(ipc1) || isNaN(ipc2) || isNaN(ipc3) || isNaN(ipc4)){
            return alert("Solo numeros y puntos");
        }
        anualProyected1 = ((((1+(ipc1 /100)) **12) -1) *100);
        anualProyected2 = ((((1+(ipc2 /100)) **12) -1) *100);
        anualProyected3 = ((((1+(ipc3 /100)) **12) -1) *100);
        anualProyected4 = ((((1+(ipc4 /100)) **12) -1) *100);
        proyected = (anualProyected1 + anualProyected2 + anualProyected3 + anualProyected4) / 4;
        alert(`Inflacion del quarter proyectada: ${proyected.toFixed(2)}%`);
    }

    function semester(){
        let ipc1 = document.getElementById("month1").value;
        let ipc2 = document.getElementById("month2").value;
        let ipc3 = document.getElementById("month3").value;
        let ipc4 = document.getElementById("month4").value;
        let ipc5 = document.getElementById("month5").value;
        let ipc6 = document.getElementById("month6").value;
        let anualProyected1;
        let anualProyected2;
        let anualProyected3;
        let anualProyected4;
        let anualProyected5;
        let anualProyected6;
        let proyected;
        if(ipc1 == ""){
            return alert("Falta informacion del primer mes");
        } else if(ipc2 == ""){
            return alert("Falta informacion del segundo mes");
        } else if(ipc3 == ""){
            return alert("Falta informacion del tercer mes");
        } else if(ipc4 == ""){
            return alert("Falta informacion del cuarto mes");
        } else if(ipc5 == ""){
            return alert("Falta informacion del cuarto mes");
        } else if(ipc6 == ""){
            return alert("Falta informacion del cuarto mes");
        } 
        if(isNaN(ipc1)||isNaN(ipc2)||isNaN(ipc3)||isNaN(ipc4)||isNaN(ipc5)||isNaN(ipc6)){
            return alert("Solo numeros y puntos");
        }
        anualProyected1 = ((((1+(ipc1 /100)) **12) -1) *100);
        anualProyected2 = ((((1+(ipc2 /100)) **12) -1) *100);
        anualProyected3 = ((((1+(ipc3 /100)) **12) -1) *100);
        anualProyected4 = ((((1+(ipc4 /100)) **12) -1) *100);
        anualProyected5 = ((((1+(ipc5 /100)) **12) -1) *100);
        anualProyected6 = ((((1+(ipc6 /100)) **12) -1) *100);
        proyected = (anualProyected1 + anualProyected2 + anualProyected3 + anualProyected4 + anualProyected5 + anualProyected6) / 6;
        alert(`Inflacion del semestre proyectada: ${proyected.toFixed(2)}%`);
    }
})


const btnAcum = document.getElementById("btn-calculate-acum");
btnAcum.addEventListener("click", ()=>{
    let inputs = document.querySelectorAll(".input-acum");
    let array = [];
    let accumulated = 1;
    let finalResult;

    if(document.getElementById(`input-acum-res`).value != ``){
        document.getElementById(`input-acum-res`).value = ``
    }
    for (let i=0; i<inputs.length; i++) {
        array[i] = inputs[i].value;
    }
    for (let i=0; i<array.length; i++) {
        if(array[i] == ""){
            continue;
        }
        array[i] = ((array[i] /100)+1);
        accumulated *= array[i];
    }
    for (let i=0; i<inputs.length; i++) {
        if(isNaN(array[i])){
            return alert("Solo numeros y puntos");
        }
    }
    finalResult = (accumulated - 1) *100;
    document.getElementById("input-acum-res").value = `${finalResult.toFixed(2)}%`;
});


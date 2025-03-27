class Item 
{
    txt;
    check;
    fechaCreado;
    fechaCheck;

    constructor (txt, check, fechaCreado, fechaCheck)    {
        this.txt=txt;
        this.check=check;
        this.fechaCreado=fechaCreado;
        this.fechaCheck=fechaCheck;
    }
}

let array;
const txtCheckbox= document.getElementById("txtCheckbox");
const fecha1Checkbox= document.getElementById("fechaCreado");
const fecha2Checkbox= document.getElementById("fechaCheck");


//CREAR NUEVO ITEM Y AGREGARLO AL ARRAY
boton.onclick = () => {
    const txtItem = document.getElementById("input").value;

    const item1= new Item(txtItem, false, Date.now(), 0);

    array.push(item1);

    
    txtCheckbox.innerHtml= "kk";
}


let uploadField = document.getElementById("file");

const newsubmission = document.getElementById("newsubmission");
const name = document.getElementById("name");
const addBtn = document.querySelector(".add-more");
const files = document.querySelector(".files");

let number = 1;
let uploadFieldX;

const addField = () => {
		
    let fileName = 'input' + number
    if(number<3)
    {
        let newField = document.createElement('div')
        newField.setAttribute('class','input-group')
        let newInput = document.createElement('input')
        newInput.setAttribute('type','file')
        newInput.setAttribute('name',fileName)
        newInput.setAttribute('accept','image/*')
        newInput.setAttribute('id',fileName)
        newField.appendChild(newInput)
        files.appendChild(newField)
        uploadFieldX = document.getElementById(fileName);
        uploadFieldX.addEventListener('change',checkFile)
        number++;
    }
    if(number==3){
        addBtn.setAttribute('disabled','')
        
    }
    
}

const checkFile = (e) => {
    if(e.target.files[0].size > 4097152){
        alert("Plik jest za duży! Maksymalny rozmiar obrazu to 2MB\nProsimy o przesłanie pliku bezpośrednio na nasz adres mailowy :)");
        e.target.value = "";
     };
    
}

uploadField.addEventListener('change',checkFile)
	
	name.addEventListener("blur", function() {
		newsubmission.value = newsubmission.value + name.value
		console.log(newsubmission.value)
	  });
	addBtn.addEventListener('click',addField)
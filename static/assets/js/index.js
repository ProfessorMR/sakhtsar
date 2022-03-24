//{start} Submit content
const fullNameSubmitContent = document.getElementById('full-name-submit-content');
const subjectSubmitContent = document.getElementById('subject-sumbit-content');
const categorysSubmitContent = document.getElementById('category-submit-content');
const chooseFileSubmitContent = document.getElementById('choose-file-submit-content')
const btnSubmitContent = document.getElementById('btn-submit-content');
const showCategories = document.querySelector(".showCategories");
const showCategoriesName = document.querySelectorAll('.itemCategory');
const uploadSubmitConntetLabel = document.querySelector('.upload-submit-content').children[1];
let validate_1 = false;
let validate_2 = false;
let validate_3 = false;
let validate_4 = false;

fullNameSubmitContent.oninput = () => {

    const fullNameSubmitContentValue = fullNameSubmitContent.value.trim();

    if(fullNameSubmitContentValue != ''){
        validate_1 = true;
    }
    else{
        validate_1 = false;
    }
    if(validate_1 && validate_2 && validate_3 && validate_4){
        btnSubmitContent.disabled = false;
        btnSubmitContent.classList.add('activeBtnSubmitContent');
    }
    else{
        btnSubmitContent.disabled = true;
        btnSubmitContent.classList.remove('activeBtnSubmitContent');
    }
}

subjectSubmitContent.oninput = () => {

    const subjectSubmitContentValue = subjectSubmitContent.value.trim();

    if(subjectSubmitContentValue != ''){
        validate_2 = true;
    }
    else{
        validate_2= false;
    }
    if(validate_1 && validate_2 && validate_3 && validate_4){
        btnSubmitContent.disabled = false;
        btnSubmitContent.classList.add('activeBtnSubmitContent');
    }
    else{
        btnSubmitContent.disabled = true;
        btnSubmitContent.classList.remove('activeBtnSubmitContent');
    }
}

categorysSubmitContent.onclick = () => {
    showCategories.classList.toggle("activeShowCategory");
}

showCategoriesName.forEach(i => i.addEventListener('click',function(){

    categorysSubmitContent.value = i.innerHTML;
    showCategories.classList.remove("activeShowCategory");
    validate_3 = true;

    if(validate_1 && validate_2 && validate_3 && validate_4){
        btnSubmitContent.disabled = false;
        btnSubmitContent.classList.add('activeBtnSubmitContent');
    }
    else{
        btnSubmitContent.disabled = true;
        btnSubmitContent.classList.remove('activeBtnSubmitContent');
    }
}));

chooseFileSubmitContent.oninput = () =>{
    let uploadName = chooseFileSubmitContent.value.split("\\").pop()

    uploadSubmitConntetLabel.innerHTML = uploadName;
    uploadSubmitConntetLabel.parentElement.classList.add('activeColorToUploader');
    validate_4 = true;

    if(validate_1 && validate_2 && validate_3 && validate_4){
        btnSubmitContent.disabled = false;
        btnSubmitContent.classList.add('activeBtnSubmitContent');
    }
    else{
        btnSubmitContent.disabled = true;
        btnSubmitContent.classList.remove('activeBtnSubmitContent');
    }
}

//{end} Submit content
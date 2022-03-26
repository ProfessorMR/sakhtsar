// {start} contact us 

var InpName = document.getElementById('name');
var Inpphone = document.getElementById('phone');
var btn = document.getElementById('btn');
var bol1 = false;
var bol2 = false;
InpName.oninput = () => {
    if(InpName.value.trim() != ""){
        bol1 = true;
    }else{
        bol1 = false;
    }
    if(bol1 && bol2){
        btn.disabled = false;
        btn.classList.add('enable');
    }else{
        btn.disabled = true;
        btn.classList.remove('enable');
    }
}

Inpphone.oninput = () => {
    if(Inpphone.value.trim() != null && Inpphone.value.trim().length == 11 && Inpphone.value.charAt(0) == 0 && Inpphone.value.charAt(1) == 9){
        bol2 = true;
    }else{
        bol2 = false;
    }
    if(bol1 && bol2){
        btn.disabled = false;
        btn.classList.add('enable');
    }else{
        btn.disabled = true;
        btn.classList.remove('enable');
    }
}

// {end} contact us
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
//{start} scrollbar script
const sections = document.querySelectorAll('section');
const circle = document.querySelectorAll('.circle');
let current;

window.addEventListener('scroll',() => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(window.pageYOffset >= sectionTop - sectionHeight / 3){
            current = section.getAttribute('id');
        }
    });

    circle.forEach(item =>{
        item.classList.remove('active');
        if(item.classList.contains(current)){
            item.classList.add('active');
        }
    })
});

//{start} add nextSection and prevSection
const nameOfSection = ["header","contactus","aboutus","submitcontent"];
let currentSection = nameOfSection[0];
window.onload = () => {
    window.scrollTo(0, 0);
    history.replaceState(null, null, ' ');
}


//{start} add nextSection
const nextSection = () => {
    window.addEventListener('scroll',() => {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.pageYOffset >= sectionTop - sectionHeight / 3){
                currentSection = section.getAttribute('id');
            }
        });   
    });
    if(currentSection == nameOfSection[0]){
        window.location.href = `#${nameOfSection[1]}`
    }
    else if(currentSection == nameOfSection[1]){
        window.location.href = `#${nameOfSection[2]}`;
    }
    else if(currentSection == nameOfSection[2]){
        window.location.href = `#${nameOfSection[3]}`;
    }
    else if(currentSection == nameOfSection[3]){
        window.location.href = `#${nameOfSection[0]}`;
    }
}
//{end} add nextSection
//{start} add prevSection
const prevSection = () => {
    window.addEventListener('scroll',() => {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.pageYOffset >= sectionTop - sectionHeight / 3){
                currentSection = section.getAttribute('id');
            }
        });   
    });
    if(currentSection == nameOfSection[0]){
        window.location.href = `#${nameOfSection[3]}`
    }
    else if(currentSection == nameOfSection[1]){
        window.location.href = `#${nameOfSection[0]}`;
    }
    else if(currentSection == nameOfSection[2]){
        window.location.href = `#${nameOfSection[1]}`;
    }
    else if(currentSection == nameOfSection[3]){
        window.location.href = `#${nameOfSection[2]}`;
    }
}
//{end} add prevSection
//{end} add nextSection and prevSection

circle.forEach(item => item.addEventListener('mouseover',() => {
    item.classList.add('activePopUp');
}));

circle.forEach(item => item.addEventListener('mouseout',() => {
    item.classList.remove('activePopUp');
}));

//{end} scrollbar script
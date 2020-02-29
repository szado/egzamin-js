// Zadanie 4.1
const sampleClass = document.querySelectorAll('.sample_class');
function getTagsOfElements(elements) {
    const sampleClassArray = Array.from(elements);
    const sampleTagsArray = [];

    sampleClassArray.forEach((elements) => {
        sampleTagsArray.push(elements.tagName);
    });

    console.log(sampleTagsArray);
    return sampleTagsArray;
}

getTagsOfElements(sampleClass);

// Zadanie 4.2

const sampleID = document.querySelector('#sample_id');
function getClassesOfElement(element) {
    console.log(Array.from(element.classList));
    return Array.from(element.classList);
}
 
getClassesOfElement(sampleID);

// Zadanie 4.3
const sampleClass2 = document.querySelectorAll(".sample_class_2 li");

function getInnerTextsOfElements(elements) {
    const innerTextArray = [];

    for (i=0; i<elements.length; i++) {
        innerTextArray.push(elements[i].innerText);
    }

    console.log(innerTextArray);

    return innerTextArray;
}

getInnerTextsOfElements(sampleClass2);

// Zadanie 4.4
const anchors = document.querySelectorAll('a');

function getAddressesOfElements(elements) {
    const anchorsArray = Array.from(elements);
    const anchorsHrefValues = [];

    anchorsArray.forEach((elements) => {
        anchorsHrefValues.push(elements.getAttribute("href"));
    });

    console.log(anchorsHrefValues);
    return anchorsHrefValues;
}

getAddressesOfElements(anchors);

// Zadanie 4.5
const childsOfSampleClass3 = document.querySelectorAll('.sample_class_3 > *');
getTagsOfElements(childsOfSampleClass3);
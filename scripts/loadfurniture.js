document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(currentUrl);
    
    urlParams.forEach((value) => {
        const sku = value;
        const selectedItem = furnitureDataArray.find(item => item.sku === sku);

        if (selectedItem) {
            loadInformation(selectedItem);
        } else {
            console.error(`Item with SKU ${sku} not found.`);
        }
    });
});

function loadInformation(furnitureInformation) {
    const productName = document.getElementById("productName")
    productName.innerText = furnitureInformation.name;

    const SKUNum = document.getElementById("SKUNum")
    SKUNum.innerText = furnitureInformation.sku;

    const productColor = document.getElementById("productColor")
    productColor.innerText = furnitureInformation.color;

    const productDescription = document.getElementById("productColor")
    productDescription.innerText = furnitureInformation.description;

    const price = document.getElementById("price")
    price.innerText = furnitureInformation.price;

    const shipping = document.getElementById("shipping")
    shipping.innerText = furnitureInformation.shipping;

    const finance = document.getElementById("financeNum");
    const financeValue = (parseInt(furnitureInformation.price) + parseInt(furnitureInformation.shipping)) / 12; 
    finance.innerText = `${financeValue.toFixed(2)}`;
    
    loadConstruction(furnitureInformation)
    loadCare(furnitureInformation)
    loadAssembly(furnitureInformation)
    loadFeatureImages(furnitureInformation)
    loadThumbnailImages(furnitureInformation)
    loadNavImages(furnitureInformation)
}
function loadConstruction(furnitureInformation) {

    const constructionList = document.getElementById("productConstruction");
    constructionList.innerHTML = "";

    furnitureInformation.construction.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        constructionList.appendChild(listItem);
    });
}

function loadCare(furnitureInformation) {

    const careList = document.getElementById("productCare");
    careList.innerHTML = "";

    furnitureInformation.care.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        careList.appendChild(listItem);
    });
}

function loadAssembly(furnitureInformation){
    const assemblyDiv = document.getElementById("productAssembly")
    assemblyDiv.innerText = furnitureInformation.assembly;
}
function loadFeatureImages(furnitureInformation) {
    const imageContainer = document.getElementById("featureImages");
    const productImages = imageContainer.querySelectorAll('img');

    productImages.forEach((image, index) => {
        if (index < furnitureInformation.images.length) {
            image.src = furnitureInformation.images[index];
            console.log(`Image ${index + 1} source updated: ${image.src}`);
        } else {
            console.warn(`No image URL found for Image ${index + 1}`);
        }
    });
}
function loadThumbnailImages(furnitureInformation) {
    const imageContainer = document.getElementById("thumbnailImages");
    const productImages = imageContainer.querySelectorAll('img');

    productImages.forEach((image, index) => {
        if (index < furnitureInformation.images.length) {
            image.src = furnitureInformation.images[index];
            console.log(`Image ${index + 1} source updated: ${image.src}`);
        } else {
            console.warn(`No image URL found for Image ${index + 1}`);
        }
    });
}

function loadNavImages(furnitureInformation) {
    const imageContainer = document.getElementById("additionalInformation");
    const productImages = imageContainer.querySelectorAll('img');

    productImages.forEach((image, index) => {
        if (index < furnitureInformation.images.length) {
            image.src = furnitureInformation.images[index];
            console.log(`Image ${index + 1} source updated: ${image.src}`);
        } else {
            console.warn(`No image URL found for Image ${index + 1}`);
        }
    });
}




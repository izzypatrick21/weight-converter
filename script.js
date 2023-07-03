let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

let convertFromKg = () => {
    let kgValue = kgRef.value;
    lbRef.value = (kgValue * 2.205).toFixed(2);
    ozRef.value = (kgValue * 35.274).toFixed(2);
};

let convertFromLb = () => {
    let lbValue = lbRef.value;
    kgRef.value = (lbValue / 2.205).toFixed(2);
    ozRef.value = (lbValue * 16).toFixed(2);
};

let convertFromOz = () => {
    let ozValue = ozRef.value;
    lbRef.value = (ozValue / 16).toFixed(2);
    kgRef.value = (ozValue / 35.274).toFixed(2);
};

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);

window.addEventListener("load", convertFromKg);
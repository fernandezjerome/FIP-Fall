// import { getData } from "./modules/dataMiner.js";
const ajaxImg = document.querySelector(".sql__img");
const ajaxContent = document.querySelector(".sql__content");

function getData() {
    fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        })

        .catch((error) => console.log(error));
}

function callback(data) {
    const buttons = Array.from(
        document.querySelectorAll(".intro__buttons .sql-btn")
    );
    let prevTarget;
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (prevTarget !== undefined) {
                // console.log(`prevTarget`, prevTarget);
                prevTarget.classList.remove("selected");
            }
            const target = event.target;
            target.classList.add("selected");
            prevTarget = target;
            const key = target.dataset.name;
            // console.log(data[key]);
            makeInfo(data[key]);
        });
    });
}

function makeInfo(data) {
    // console.log(data);

    (ajaxContent.innerHTML = `
    <h4 class="info__title">${data.product_name}</h4>
    <p class="info__content">${data.product_desc}</p>
    `),
        (ajaxImg.innerHTML = `
    <div class="info__img">
    <img src="images/${data.img}" alt="${data.alt}" />
    </div> `);
}

getData();

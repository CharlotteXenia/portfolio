// Funktion til at opdatere understregningslinjen, når der scrolles
function updateUnderlineOnScroll() {
    const scrollPosition = window.scrollY;
    const navRect = document.querySelector('nav').getBoundingClientRect();
    const navHeight = navRect.height;
    const sections = document.querySelectorAll('section[id]');
    let activeLink = null;

    // Loop gennem sektioner for at finde den første sektion over scrollPosition
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionId = section.getAttribute('id');
        const offsetAttribute = section.getAttribute('data-offset');
        const offset = offsetAttribute ? parseInt(offsetAttribute) : 0; // Brug individuel offset, hvis den er defineret
        const sectionTop = section.offsetTop - navHeight - offset;

        if (scrollPosition >= sectionTop) {
            activeLink = document.querySelector('nav a[href="#' + sectionId + '"]');
            break;
        }
    }

    // Opdater understregningslinjen baseret på det aktive link
    setActiveLink(activeLink);
}

// Funktion til at rulle til en bestemt sektion, når et link klikkes
function scrollToSection(elementId) {
    const element = document.getElementById(elementId);
    const offsetAttribute = element.getAttribute('data-offset');
    const offset = offsetAttribute ? parseInt(offsetAttribute) : 0; // Brug individuel offset, hvis den er defineret
    const position = element.offsetTop - document.querySelector('nav').getBoundingClientRect().height - offset;

    window.scrollTo({
        top: position,
        behavior: "smooth"
    });
}

// Funktion til at opdatere det aktive link og understregningslinjen
function setActiveLink(activeLink) {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active'); // Fjern 'active' klassen fra alle links
    });

    if (activeLink) {
        activeLink.classList.add('active'); // Tilføj 'active' klassen til det aktive link
    }
}

// Lyt efter scrollbegivenheder og opdater understregningslinjen
window.addEventListener('scroll', updateUnderlineOnScroll);

// Lyt efter klikbegivenheder på links og rul til den tilsvarende sektion
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

/****************************************************/
/***** modal *****/
const projRed = document.getElementById("projRed");
const proj1 = document.getElementById("proj1");
const proj2 = document.getElementById("proj2");
const proj3 = document.getElementById("proj3");
const closeWeb = document.getElementById("closeWeb");
const webMod = document.getElementById("webMod");
const webArrowLeft = document.getElementById("webArrowLeft");
const webArrowRight = document.getElementById("webArrowRight");

const logoBlue = document.getElementById("logoBlue");
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
const logo3 = document.getElementById("logo3");
const closeLogo = document.getElementById("closeLogo");
const logoMod = document.getElementById("logoMod");
const logoArrowLeft = document.getElementById("logoArrowLeft");
const logoArrowRight = document.getElementById("logoArrowRight");

const illuGreen = document.getElementById("illuGreen");
const illu1 = document.getElementById("illu1");
const illu2 = document.getElementById("illu2");
const illu3 = document.getElementById("illu3");
const closeIllu = document.getElementById("closeIllu");
const illuMod = document.getElementById("illuMod");
const illuArrowLeft = document.getElementById("illuArrowLeft");
const illuArrowRight = document.getElementById("illuArrowRight");

let projectSide = 1

/***** rød modal *****/
closeWeb.addEventListener("click", function () {
    projRed.style.display = "none";
});

webMod.addEventListener("click", function () {
    projRed.style.display = "block";
});

webArrowLeft.addEventListener("click", function () {
    if (projectSide == 1) {
        projectSide = 3
    } else {
        projectSide = projectSide - 1
    }
    if (projectSide == 1) {
        proj1.style.display = "block"
        proj2.style.display = "none"
        proj3.style.display = "none"
    }
    if (projectSide == 2) {
        proj1.style.display = "none"
        proj2.style.display = "block"
        proj3.style.display = "none"
    }
    if (projectSide == 3) {
        proj1.style.display = "none"
        proj2.style.display = "none"
        proj3.style.display = "block"
    }
})

webArrowRight.addEventListener("click", function () {
    if (projectSide == 3) {
        projectSide = 1
    } else {
        projectSide = projectSide + 1
    }
    if (projectSide == 1) {
        proj1.style.display = "block"
        proj2.style.display = "none"
        proj3.style.display = "none"
    }
    if (projectSide == 2) {
        proj1.style.display = "none"
        proj2.style.display = "block"
        proj3.style.display = "none"
    }
    if (projectSide == 3) {
        proj1.style.display = "none"
        proj2.style.display = "none"
        proj3.style.display = "block"
    }
})

/***** Blå modal *****/
closeLogo.addEventListener("click", function () {
    logoBlue.style.display = "none";
});

logoMod.addEventListener("click", function () {
    logoBlue.style.display = "block";
});

logoArrowLeft.addEventListener("click", function () {
    if (projectSide == 1) {
        projectSide = 3
    } else {
        projectSide = projectSide - 1
    }
    if (projectSide == 1) {
        logo1.style.display = "block"
        logo2.style.display = "none"
        logo3.style.display = "none"
    }
    if (projectSide == 2) {
        logo1.style.display = "none"
        logo2.style.display = "block"
        logo3.style.display = "none"
    }
    if (projectSide == 3) {
        logo1.style.display = "none"
        logo2.style.display = "none"
        logo3.style.display = "block"
    }
})

logoArrowRight.addEventListener("click", function () {
    if (projectSide == 3) {
        projectSide = 1
    } else {
        projectSide = projectSide + 1
    }
    if (projectSide == 1) {
        logo1.style.display = "block"
        logo2.style.display = "none"
        logo3.style.display = "none"
    }
    if (projectSide == 2) {
        logo1.style.display = "none"
        logo2.style.display = "block"
        logo3.style.display = "none"
    }
    if (projectSide == 3) {
        logo1.style.display = "none"
        logo2.style.display = "none"
        logo3.style.display = "block"
    }
})

/***** Grøn modal *****/
closeIllu.addEventListener("click", function () {
    illuGreen.style.display = "none";
});

illuMod.addEventListener("click", function () {
    illuGreen.style.display = "block";
});

illuArrowLeft.addEventListener("click", function () {
    if (projectSide == 1) {
        projectSide = 3
    } else {
        projectSide = projectSide - 1
    }
    if (projectSide == 1) {
        illu1.style.display = "block"
        illu2.style.display = "none"
        illu3.style.display = "none"
    }
    if (projectSide == 2) {
        illu1.style.display = "none"
        illu2.style.display = "block"
        illu3.style.display = "none"
    }
    if (projectSide == 3) {
        illu1.style.display = "none"
        illu2.style.display = "none"
        illu3.style.display = "block"
    }
})

illuArrowRight.addEventListener("click", function () {
    if (projectSide == 3) {
        projectSide = 1
    } else {
        projectSide = projectSide + 1
    }
    if (projectSide == 1) {
        illu1.style.display = "block"
        illu2.style.display = "none"
        illu3.style.display = "none"
    }
    if (projectSide == 2) {
        illu1.style.display = "none"
        illu2.style.display = "block"
        illu3.style.display = "none"
    }
    if (projectSide == 3) {
        illu1.style.display = "none"
        illu2.style.display = "none"
        illu3.style.display = "block"
    }
})

/*************************************************************/
/***** mockup slide *****/
//projekt1
const proj1Prik1 = document.getElementById("proj1Prik1");
const proj1Prik2 = document.getElementById("proj1Prik2");

const proj1Mock1 = document.getElementById("proj1Mock1");
const proj1Mock2 = document.getElementById("proj1Mock2");

//ARRAY rød
let mockWeb1 = [proj1Mock1, proj1Mock2];
let prikkerWeb1 = [proj1Prik1, proj1Prik2];

proj1Mock1.style.display = "block";
proj1Prik1.classList.add("activePrik");
console.log("variablerne er lavet");

proj1Prik1.addEventListener("click", function () {
    for (let index = 0; index < mockWeb1.length; index++) {
        mockWeb1[index].style.display = "none";
        prikkerWeb1[index].classList.remove("activePrik");
    }

    proj1Mock1.style.display = "block";
    proj1Prik1.classList.add("activePrik");
});

proj1Prik2.addEventListener("click", function () {
    for (let index = 0; index < mockWeb1.length; index++) {
        mockWeb1[index].style.display = "none";
        prikkerWeb1[index].classList.remove("activePrik");
    }

    proj1Mock2.style.display = "block";
    proj1Prik2.classList.add("activePrik");
});

/*********************************************/
//projekt2
const proj2Prik1 = document.getElementById("proj2Prik1");
const proj2Prik2 = document.getElementById("proj2Prik2");

const proj2Mock1 = document.getElementById("proj2Mock1");
const proj2Mock2 = document.getElementById("proj2Mock2");

//ARRAY rød
let mockweb2 = [proj2Mock1, proj2Mock2];
let prikkerWeb2 = [proj2Prik1, proj2Prik2];

proj2Mock1.style.display = "block";
proj2Prik1.classList.add("activePrik");

proj2Prik1.addEventListener("click", function () {
    for (let index = 0; index < mockweb2.length; index++) {
        mockweb2[index].style.display = "none";
        prikkerWeb2[index].classList.remove("activePrik");
    }

    proj2Mock1.style.display = "block";
    proj2Prik1.classList.add("activePrik");
});

proj2Prik2.addEventListener("click", function () {
    for (let index = 0; index < mockweb2.length; index++) {
        mockweb2[index].style.display = "none";
        prikkerWeb2[index].classList.remove("activePrik");
    }

    proj2Mock2.style.display = "block";
    proj2Prik2.classList.add("activePrik");
});

/*********************************************/
//projekt3
const proj3Prik1 = document.getElementById("proj3Prik1");
const proj3Prik2 = document.getElementById("proj3Prik2");

const proj3Mock1 = document.getElementById("proj3Mock1");
const proj3Mock2 = document.getElementById("proj3Mock2");

//ARRAY rød
let mockWeb3 = [proj3Mock1, proj3Mock2];
let prikkerWeb3 = [proj3Prik1, proj3Prik2];

proj3Mock1.style.display = "block";
proj3Prik1.classList.add("activePrik");

proj3Prik1.addEventListener("click", function () {
    for (let index = 0; index < mockWeb3.length; index++) {
        mockWeb3[index].style.display = "none";
        prikkerWeb3[index].classList.remove("activePrik");
    }

    proj3Mock1.style.display = "block";
    proj3Prik1.classList.add("activePrik");
});

proj3Prik2.addEventListener("click", function () {
    for (let index = 0; index < mockWeb3.length; index++) {
        mockWeb3[index].style.display = "none";
        prikkerWeb3[index].classList.remove("activePrik");
    }

    proj3Mock2.style.display = "block";
    proj3Prik2.classList.add("activePrik");
});

/*********************************************/
//proces1
const logo1Proc1 = document.getElementById('logo1Proc1');
const logo1Proc2 = document.getElementById('logo1Proc2');
const logo1Proc3 = document.getElementById('logo1Proc3');
const logo1Proc4 = document.getElementById('logo1Proc4');
const logo1Proc5 = document.getElementById('logo1Proc5');

const logo1Prik1 = document.getElementById('logo1Prik1');
const logo1Prik2 = document.getElementById('logo1Prik2');
const logo1Prik3 = document.getElementById('logo1Prik3');
const logo1Prik4 = document.getElementById('logo1Prik4');
const logo1Prik5 = document.getElementById('logo1Prik5');

let logoProces1 = [logo1Proc1, logo1Proc2, logo1Proc3, logo1Proc4, logo1Proc5];
let prikkerLogo1 = [logo1Prik1, logo1Prik2, logo1Prik3, logo1Prik4, logo1Prik5];

logo1Proc1.style.display = "block";
logo1Prik1.classList.add("activePrik");

logo1Prik1.addEventListener("click", function () {
    for (let index = 0; index < logoProces1.length; index++) {
        logoProces1[index].style.display = "none";
        prikkerLogo1[index].classList.remove("activePrik");
    }

    logo1Proc1.style.display = "block";
    logo1Prik1.classList.add("activePrik");
})

logo1Prik2.addEventListener("click", function () {
    for (let index = 0; index < logoProces1.length; index++) {
        logoProces1[index].style.display = "none";
        prikkerLogo1[index].classList.remove("activePrik");
    }

    logo1Proc2.style.display = "block";
    logo1Prik2.classList.add("activePrik");
})

logo1Prik3.addEventListener("click", function () {
    for (let index = 0; index < logoProces1.length; index++) {
        logoProces1[index].style.display = "none";
        prikkerLogo1[index].classList.remove("activePrik");
    }

    logo1Proc3.style.display = "block";
    logo1Prik3.classList.add("activePrik");
})

logo1Prik4.addEventListener("click", function () {
    for (let index = 0; index < logoProces1.length; index++) {
        logoProces1[index].style.display = "none";
        prikkerLogo1[index].classList.remove("activePrik");
    }

    logo1Proc4.style.display = "block";
    logo1Prik4.classList.add("activePrik");
})

logo1Prik5.addEventListener("click", function () {
    for (let index = 0; index < logoProces1.length; index++) {
        logoProces1[index].style.display = "none";
        prikkerLogo1[index].classList.remove("activePrik");
    }

    logo1Proc5.style.display = "block";
    logo1Prik5.classList.add("activePrik");
})

//proces2
const logo2Proc1 = document.getElementById('logo2Proc1');
const logo2Proc2 = document.getElementById('logo2Proc2');
const logo2Proc3 = document.getElementById('logo2Proc3');
const logo2Proc4 = document.getElementById('logo2Proc4');
const logo2Proc5 = document.getElementById('logo2Proc5');

const logo2Prik1 = document.getElementById('logo2Prik1');
const logo2Prik2 = document.getElementById('logo2Prik2');
const logo2Prik3 = document.getElementById('logo2Prik3');
const logo2Prik4 = document.getElementById('logo2Prik4');
const logo2Prik5 = document.getElementById('logo2Prik5');

let logoProces2 = [logo2Proc1, logo2Proc2, logo2Proc3, logo2Proc4, logo2Proc5];
let prikkerlogo2 = [logo2Prik1, logo2Prik2, logo2Prik3, logo2Prik4, logo2Prik5];

logo2Proc1.style.display = "block";
logo2Prik1.classList.add("activePrik");

logo2Prik1.addEventListener("click", function () {
    for (let index = 0; index < logoProces2.length; index++) {
        logoProces2[index].style.display = "none";
        prikkerlogo2[index].classList.remove("activePrik");
    }

    logo2Proc1.style.display = "block";
    logo2Prik1.classList.add("activePrik");
})

logo2Prik2.addEventListener("click", function () {
    for (let index = 0; index < logoProces2.length; index++) {
        logoProces2[index].style.display = "none";
        prikkerlogo2[index].classList.remove("activePrik");
    }

    logo2Proc2.style.display = "block";
    logo2Prik2.classList.add("activePrik");
})

logo2Prik3.addEventListener("click", function () {
    for (let index = 0; index < logoProces2.length; index++) {
        logoProces2[index].style.display = "none";
        prikkerlogo2[index].classList.remove("activePrik");
    }

    logo2Proc3.style.display = "block";
    logo2Prik3.classList.add("activePrik");
})

logo2Prik4.addEventListener("click", function () {
    for (let index = 0; index < logoProces2.length; index++) {
        logoProces2[index].style.display = "none";
        prikkerlogo2[index].classList.remove("activePrik");
    }

    logo2Proc4.style.display = "block";
    logo2Prik4.classList.add("activePrik");
})

logo2Prik5.addEventListener("click", function () {
    for (let index = 0; index < logoProces2.length; index++) {
        logoProces2[index].style.display = "none";
        prikkerlogo2[index].classList.remove("activePrik");
    }

    logo2Proc5.style.display = "block";
    logo2Prik5.classList.add("activePrik");
})

//proces3
const logo3Proc1 = document.getElementById('logo3Proc1');
const logo3Proc2 = document.getElementById('logo3Proc2');
const logo3Proc3 = document.getElementById('logo3Proc3');
const logo3Proc4 = document.getElementById('logo3Proc4');
const logo3Proc5 = document.getElementById('logo3Proc5');

const logo3Prik1 = document.getElementById('logo3Prik1');
const logo3Prik2 = document.getElementById('logo3Prik2');
const logo3Prik3 = document.getElementById('logo3Prik3');
const logo3Prik4 = document.getElementById('logo3Prik4');
const logo3Prik5 = document.getElementById('logo3Prik5');

let logoProces3 = [logo3Proc1, logo3Proc2, logo3Proc3, logo3Proc4, logo3Proc5];
let prikkerlogo3 = [logo3Prik1, logo3Prik2, logo3Prik3, logo3Prik4, logo3Prik5];

logo3Proc1.style.display = "block";
logo3Prik1.classList.add("activePrik");

logo3Prik1.addEventListener("click", function () {
    for (let index = 0; index < logoProces3.length; index++) {
        logoProces3[index].style.display = "none";
        prikkerlogo3[index].classList.remove("activePrik");
    }

    logo3Proc1.style.display = "block";
    logo3Prik1.classList.add("activePrik");
})

logo3Prik2.addEventListener("click", function () {
    for (let index = 0; index < logoProces3.length; index++) {
        logoProces3[index].style.display = "none";
        prikkerlogo3[index].classList.remove("activePrik");
    }

    logo3Proc2.style.display = "block";
    logo3Prik2.classList.add("activePrik");
})

logo3Prik3.addEventListener("click", function () {
    for (let index = 0; index < logoProces3.length; index++) {
        logoProces3[index].style.display = "none";
        prikkerlogo3[index].classList.remove("activePrik");
    }

    logo3Proc3.style.display = "block";
    logo3Prik3.classList.add("activePrik");
})

logo3Prik4.addEventListener("click", function () {
    for (let index = 0; index < logoProces3.length; index++) {
        logoProces3[index].style.display = "none";
        prikkerlogo3[index].classList.remove("activePrik");
    }

    logo3Proc4.style.display = "block";
    logo3Prik4.classList.add("activePrik");
})

logo3Prik5.addEventListener("click", function () {
    for (let index = 0; index < logoProces3.length; index++) {
        logoProces3[index].style.display = "none";
        prikkerlogo3[index].classList.remove("activePrik");
    }

    logo3Proc5.style.display = "block";
    logo3Prik5.classList.add("activePrik");
})


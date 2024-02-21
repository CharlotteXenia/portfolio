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
    link.addEventListener('click', function(event) {
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
        projectSide = projectSide -1
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
        projectSide = projectSide -1
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
        projectSide = projectSide -1
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
/***** burger *****/
// function myFunction(x) {
//     x.classList.toggle("change");

//   }

//   /* Open */
// function openNav() {
//     document.getElementById("myNav").style.height = "100%";
//   }
  
//   /* Close */
//   function closeNav() {
//     document.getElementById("myNav").style.height = "0%";
//   }
  

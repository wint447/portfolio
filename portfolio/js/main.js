// script.js
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        // link.addEventListener("click", smoothScroll);
    });

    window.addEventListener("scroll", highlightNavLink);
});

const highlightNavLink = () => {
    const sectionList = document.querySelectorAll(".content");
    sectionList.forEach((section) => {
        const link = document.querySelector(`nav a[href="#${section.id}"]`);
        if (link) { // 요소가 존재하는지 확인
            const sectionRect = section.getBoundingClientRect();
            // console.log(link,sectionRect);
            if (sectionRect.top <= 60 && sectionRect.bottom >= 60) {
                // 만약 현재 보이는 화면에 섹션의 일부가 있는 경우 (60px 이상 노출된 경우)
                // 이것은 사용자가 섹션으로 스크롤했음을 의미합니다.
                // 따라서 "active" 클래스를 해당 링크에 추가하여 해당 섹션과 연결됨을 나타냅니다.
                link.classList.add("active");
                if (section.id === "home") {
                    link.style.setProperty("--after-background-image-home", "url('../img/home_black.png')");
                } else if (section.id === "introduce") {
                    link.style.setProperty("--after-background-image-profile", "url('../img/profile_black.png')");
                } else if (section.id === "project") {
                    link.style.setProperty("--after-background-image-project", "url('../img/project_black.png')");
                }
            } else {
                // 그렇지 않으면 (섹션이 화면에서 완전히 사라진 경우)
                // "active" 클래스를 링크에서 제거하고 해당 섹션과의 연결을 나타내지 않습니다.
                link.classList.remove("active");
                if (section.id === "home") {
                    link.style.setProperty("--after-background-image-home", "url('../img/home_white.png')");
                } else if (section.id === "introduce") {
                    link.style.setProperty("--after-background-image-profile", "url('../img/profile_white.png')");
                } else if (section.id === "project") {
                    link.style.setProperty("--after-background-image-project", "url('../img/project_white.png')");
                }
            }
        }
    });
}

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function (navLink) {
    navLink.addEventListener("mouseover", function (e) {
        if(e.target.hash === "#home"){
            e.target.innerHTML = "Home";
        }else if(e.target.hash === "#introduce"){
            e.target.innerHTML = "Profile";
        }else if(e.target.hash === "#project"){
            e.target.innerHTML = "Project";
        }
    });
    navLink.addEventListener("mouseout", function (e) {
        e.target.innerHTML = "";
    });
});
//DOM Elements//

const mainpage = document.querySelector(".main-page");
const loginpage = document.querySelector(".login-page");
const middlecontent = document.querySelector(".middle-content");
const userinfo = document.querySelector(".user-info");
const password = document.querySelector(".password");
const buttontop = document.querySelector(".btn-top");
const feedspage = document.querySelector(".feeds-page");
const loginmodal = document.querySelector(".login-modal");
const modalx = document.querySelector(".login-modal i");
const loginformbtn = document.querySelector(".login-form-btn");
const loginuserinfo = document.querySelector(".login-user-info");
const loginpassword = document.querySelector(".login-password");
const postbtn = document.querySelector(".post-btn");
const postmodalwrapper = document.querySelector(".post-modal-wrapper");
const postmodalheader = document.querySelector(".post-modal-header i");
const postmodalheadbtn = document.querySelector(".post-modal-header button");
const postmodalfoot = document.querySelector(".post-modal-footer span");
const postmodalinput = document.querySelector(".post-modal-input");
const postheaduser = document.querySelector(".user");
const sidebarwrapper = document.querySelector(".sidebar-wrapper");
const sidebarheader = document.querySelector(".sidebar-header i");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

/******************************************************/

//Main Page

const gotologinpage = () => {
    mainpage.style.display = 'none';
    loginpage.style.display = 'grid';
};

middlecontent.addEventListener('click', (e) => {

    if (e.target.classList[1] === 'main-btn')
        gotologinpage();
    //console.log(e.target);
});




//Main page credential  validation 

const gotofeedspage = () => {
    mainpage.style.display = "none";
    feedspage.style.display = "block";
};

buttontop.addEventListener('click', () => {
    if (userinfo.value !== "" && password.value !== "") {
        gotofeedspage();
    } else {
        gotologinpage();
        loginmodal.style.display = 'block';

    }
});

//Login page 

modalx.addEventListener('click', () => {
    loginmodal.style.display = "none";

});

loginformbtn.addEventListener('click', () => {
    if (loginuserinfo.value !== "" && loginpassword.value !== "") {
        loginpage.style.display = "none";
        feedspage.style.display = "block";
    } else {
        loginmodal.style.display = 'block';
    }

});

//Feeds Post

//postbtn.addEventListener('click' ,() =>{
//  postmodalwrapper.style.display="block";
//});

postbtn.onclick = () => {
    postmodalwrapper.style.display = "block";
};


postmodalheader.addEventListener('click', () => {
    postmodalwrapper.style.display = "none";

    if (postmodalinput.value !== "") {
        postmodalinput.value = "";
        changeopacity(0.5);
    }
});


const changeopacity = x => {
    postmodalheadbtn.style.opacity = x;
    postmodalfoot.style.opacity = x;
};

postmodalinput.addEventListener('keypress', (e) => {
    if (e.target.value !== "") {
        changeopacity(1);
    }

});

postmodalinput.addEventListener('blur', (e) => {
    if (e.target.value === "") {
        changeopacity(0.5);
    }

});

//sidebar


//
//postheaduser.addEventListener('click' , () =>{
//   sidebarwrapper.style.display = "block";
//});

//sidebarheader.addEventListener('click' , () => {
//   sidebarwrapper.style.display = "none";
//});


postheaduser.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarwrapper.classList.add('sidebar-wrapper-display');
});

sidebarheader.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarwrapper.classList.remove('sidebar-wrapper-display');
});

//Dark mode

const darkelements1 = document.querySelectorAll('.dark-mode-1');
const darkelements2 = document.querySelectorAll('.dark-mode-2');
const lighttext = document.querySelectorAll('.light-text');
const border = document.querySelectorAll('.border');


toggle.addEventListener('click', () => {
    circle.classList.toggle('move-toggle');
    Array.from(darkelements1).map((darkEl1) => darkEl1.classList.toggle('dark1'));
    Array.from(darkelements2).map((darkEl2) => darkEl2.classList.toggle('dark2'));
    Array.from(lighttext).map((darkEl3) => darkEl3.classList.toggle('light'));
    Array.from(border).map((darkEl4) => darkEl4.classList.toggle('border-color'));

    //console.log(Array.from (darkelements2));
});
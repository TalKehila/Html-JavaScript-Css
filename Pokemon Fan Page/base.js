
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.Login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-Popup');
const iconclose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

const userList = document.getElementById('user-list');

fetch('/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `User ID: ${user.id}, Username: ${user.username}`;
            userList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });


// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.Login-link');
// const registerLink = document.querySelector('.register-link');
// const btnPopup= document.querySelector('.btnLogin-Popup');
// const iconclose = document.querySelector('.icon-close');


// registerLink.addEventListener( 'click',()=> {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener( 'click',()=> {
//     wrapper.classList.remove('active');
// });

// btnPopup.addEventListener( 'click',()=> {
//     wrapper.classList.add('active-popup');
// });

// iconclose.addEventListener( 'click',()=> {
//     wrapper.classList.remove('active-popup');
// });
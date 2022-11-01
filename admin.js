
const admin_logOutSection=document.querySelector('.logout_section');
const admin_welcome=document.querySelector('.welcome_header');
const admin_logOutIcon=document.querySelector('.fa-power-off');

admin_welcome.addEventListener('click',showLogout);

function showLogout(){
    // console.log(admin_logOutSection);
        if (admin_logOutSection.classList.contains('hide')) {
            admin_logOutSection.classList.remove('hide');
        }
        else {
            admin_logOutSection.classList.add('hide');
        }
}
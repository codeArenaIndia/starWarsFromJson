export default function Auth(){
    const user = JSON.parse(localStorage.getItem('user')) || {};
    return user.isLoggedIn ? true : false;
}
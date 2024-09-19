import {  jwtDecode } from 'jwt-decode';;

const checkAdmin=(token=localStorage.getItem('token')|| "")=>{
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    return decodedToken.admin;
}

export default checkAdmin;
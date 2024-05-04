import axios from "axios";

export default axios.create({
    baseURL:"https://11f3-2405-4802-9802-a700-b51a-edd6-9b99-f75f.ngrok-free.app",
    headers: {"ngrok-skip-browser-warning": "true"}
})
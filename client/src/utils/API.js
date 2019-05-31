import axios from "axios";

export default {
    // **** CONTACT API ****
    getContacts: function () {
        return axios.get("/api/contacts");
    },
    saveContact: function (contactData) {
        return axios.post("/api/contacts", contactData);
    },
    // getContact: function (id) {
    //     return axios.get("/api/contacts/" + id);
    // },
    deleteContact: function (id) {
        return axios.delete("/api/contacts/" + id);
    },

    // **** EMERGENCY API ****
    getEmergency: function () {
        return axios.get("/api/emergency");
    },
    saveEmergency: function (emergencyData) {
        return axios.post("/api/emergency", emergencyData);
    },
    // getEmergency: function (id) {
    //     return axios.get("/api/contacts/" + id);
    // },
    deleteEmergency: function (id) {
        return axios.delete("/api/emergency/" + id);
    },
    userSignUp: function (UserData) {
        return axios.post("api/user/register", UserData);
    },
    userLogIn: function (UserData) {
        return axios.post("/api/user/login", UserData);
    },
    userLogout: function (UserData) {
        return axios.get("/api/user/logout", UserData);
    }
};
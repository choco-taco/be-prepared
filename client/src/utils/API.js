import axios from "axios";

export default {
    // **** CONTACT API ****
    getContacts: function () {
        return axios.get("/api/contacts");
    },
    saveContact: function (contactData) {
        return axios.post("/api/contacts", contactData);
    },
    getContact: function (id) {
        return axios.get("/api/contacts/" + id);
    },
    deleteContact: function (id) {
        return axios.delete("/api/contacts/" + id);
    },
    userSignUp: function (UserData) {
        return axios.post("api/account/signup", UserData);
    },
    userLogIn: function (UserData) {
        return axios.post("/api/account/signin", UserData);
    },

    // **** EMERGENCY API ****
    getEmergency: function () {
        return axios.get("/api/emergency");
    },
    saveEmergency: function (emergencyData) {
        return axios.post("/api/emergency", emergencyData);
    },
    deleteEmergency: function (id) {
        return axios.delete("/api/emergency/" + id);
    }
};
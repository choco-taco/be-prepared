import axios from "axios";

export default {
    // **** USER LOGIN API ****
    userSignUp: function (UserData) {
        return axios.post("api/account/signup", UserData);
    },
    userLogIn: function (UserData) {
        return axios.post("/api/account/signin", UserData);
    },

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

    // **** MEDICAL API ****
    getMedical: function () {
        return axios.get("/api/medical");
    },
    saveMedical: function (medicalData) {
        return axios.post("/api/medical", medicalData);
    },
    // getEmergency: function (id) {
    //     return axios.get("/api/contacts/" + id);
    // },
    deleteMedical: function (id) {
        return axios.delete("/api/medical/" + id);
    }
    
};
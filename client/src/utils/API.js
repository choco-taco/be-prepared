import axios from "axios";

export default {
    // ========================================
    // **** CONTACT API ****
    // ========================================
    getContacts: function () {
        return axios.get("/api/contacts");
    },
    saveContact: function (contactData) {
        return axios.post("/api/contacts", contactData);
    },
    deleteContact: function (id) {
        return axios.delete("/api/contacts/" + id);
    },

    // ========================================
    // **** EMERGENCY API ****
    // ========================================
    getEmergency: function () {
        return axios.get("/api/emergency");
    },
    saveEmergency: function (emergencyData) {
        return axios.post("/api/emergency", emergencyData);
    },
    deleteEmergency: function (id) {
        return axios.delete("/api/emergency/" + id);
    },

    // ========================================
    // **** MEDICAL API ****
    // ========================================
    getMedical: function () {
        return axios.get("/api/medical");
    },
    saveMedical: function (medicalData) {
        return axios.post("/api/medical", medicalData);
    },
    deleteMedical: function (id) {
        return axios.delete("/api/medical/" + id);
    },

    // ========================================
    // **** FIRE API ****
    // ========================================
    getFire: function () {
        return axios.get("/api/fire");
    },
    saveFire: function (fireData) {
        return axios.post("/api/fire", fireData);
    },
    deleteFire: function (id) {
        return axios.delete("/api/fire/" + id);
    },

    // ========================================
    // **** EARTHQUAKE API ****
    // ========================================
    getEarthquake: function () {
        return axios.get("/api/earthquake");
    },
    saveEarthquake: function (earthquakeData) {
        return axios.post("/api/earthquake", earthquakeData);
    },
    deleteEarthquake: function (id) {
        return axios.delete("/api/earthquake/" + id);
    },

    // ========================================
    // **** TORNADO API ****
    // ========================================
    getTornado: function () {
        return axios.get("/api/tornado");
    },
    saveTornado: function (tornadoData) {
        return axios.post("/api/tornado", tornadoData);
    },
    deleteTornado: function (id) {
        return axios.delete("/api/tornado/" + id);
    },

    // ========================================
    // **** USER API ****
    // ========================================
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
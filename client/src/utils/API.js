import axios from "axios";

export default {
    getContacts: function () {
        return axios.get("/api/contacts");
    },
    saveContact: function (contactData) {
        return axios.post("/api/contacts", contactData);
    },
    getContact: function (id) {
        return axios.get("/api/contacts/" + id);
    },
    deleteContact: function(id) {
        return axios.delete("/api/contacts/" + id);
      },
};
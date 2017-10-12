import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    ajax: Ember.inject.service(),
    host: 'http://localhost:3000/',
    getMethod: function (path) {
        return this.get('ajax').request(this.host + path); //Isso retorna uma promisse
    },
    postMethod: function (path, data) {
        return this.get('ajax').request(this.host + path, {
            method: 'POST',
            data: data
        });
    },
    putMethod: function (path, data) {
        return this.get('ajax').request(this.host + path, {
            method: 'PUT',
            data: data
        });
    },
    deleteMethod: function (path) {
        return this.get('ajax').request(this.host + path, {
            method: 'DELETE'
        });
    }
});

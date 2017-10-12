import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    ajax: Ember.inject.service(),
    host: 'https://my-json-server.typicode.com/suspecie/my-fake-api/',
    getMethod: function (path) {
        return this.get('ajax').request(this.host + path); //Isso retorna uma promisse
    }
});

import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    ajax: Ember.inject.service(),
    host: 'http://localhost:3000/',
    getMethod: function (path) {
        return this.get('ajax').request(this.host + path); //Isso retorna uma promisse
    }
});

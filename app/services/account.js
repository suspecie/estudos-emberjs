import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    requester: Ember.inject.service(),
    all: function () {
        return this.get('requester').getMethod('accounts'); //nesta etapa eu pego a promissa e retorno de novo
    },
    one: function (id) {
        return this.get('requester').getMethod('accounts/' + id);
    }
});

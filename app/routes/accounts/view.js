import Route from '@ember/routing/route';
import Ember from 'ember';

const { inject: { service } } = Ember;

export default Route.extend({
    account: service(), //Injeta os servicos
    model (params) {
        return this.get('account').one(params.id); //aqui eu recebo a promisse, n precisa tratar a promisse pq o model já resolve isso
    }
});

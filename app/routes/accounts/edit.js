import Route from '@ember/routing/route';
import Ember from 'ember';

const { inject: { service } } = Ember;

export default Route.extend({
    account: Ember.inject.service(),
    actions: {
        save (model) {
            this.get('account').update(model.id, model).then( () => {
                alert('Salvo com sucesso!');
                let owner = Ember.getOwner(this); //o owner pega o dono save como por exemplo o route.
                let route = owner.lookup('route:accounts'); //pego a rota accounts
                route.refresh(); //esse refresh para mostar a listagem atualizada, atualiza o conteúdo da rota pai
            });
        }
    },
    model (params) {
        return this.get('account').one(params.id);
    }
});

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('accounts', function() {
    this.route('view', {path: 'view/:id'});
    this.route('edit', {path: 'edit/:id'});
    this.route('remove', {path: 'remove/:id'});
    this.route('add');
  });
});

export default Router;

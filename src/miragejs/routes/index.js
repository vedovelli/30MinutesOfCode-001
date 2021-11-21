export default function routes() {
  this.timing = 1000;
  this.namespace = 'api';
  this.resource('users');
  this.resource('products');
}

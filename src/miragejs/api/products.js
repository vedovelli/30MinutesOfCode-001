import { makeServer } from '../server';

export function getProducts({ quantity = 10 }) {
  const server = makeServer();
  const products = server.createList('product', quantity);
  server.shutdown();

  return products;
}

export function getProduct() {
  const server = makeServer();
  const product = server.create('product');
  server.shutdown();

  return product;
}

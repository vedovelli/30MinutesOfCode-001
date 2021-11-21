import { Factory } from 'miragejs';
import faker from 'faker';

export default {
  user: Factory.extend({
    name() {
      return faker.name.findName();
    },
    email() {
      return faker.internet.email();
    },
    imageUrl() {
      return faker.image.avatar();
    },
    role() {
      return faker.random.arrayElement(['admin', 'user']);
    },
    department() {
      return faker.random.arrayElement(['Sales', 'Marketing', 'IT']);
    },
    mobile() {
      return faker.phone.phoneNumber();
    },
    address: {
      street() {
        return faker.address.streetAddress();
      },
      city() {
        return faker.address.city();
      },
      state() {
        return faker.address.state();
      },
      country() {
        return faker.address.country();
      },
      zip() {
        return faker.address.zipCode();
      },
    },
  }),
};

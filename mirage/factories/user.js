import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    first() {
	return faker.fake("{{name.firstName}}");
    },
    last() {
	return faker.fake("{{name.lastName}}");
    },
    job() {
	return faker.fake("{{name.jobTitle}}");
    },
    phone() {
	return faker.fake("{{phone.phoneNumber}}");
    }
});

import DS from 'ember-data';

export default DS.Model.extend({
    first: DS.attr('string'),
    last: DS.attr('string'),
    job: DS.attr('string'),
    phone: DS.attr('string')
});

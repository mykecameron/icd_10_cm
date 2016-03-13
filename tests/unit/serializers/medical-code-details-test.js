import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medical-code-details', 'Unit | Serializer | medical code details', {
  // Specify the other units that are required for this test.
  needs: ['serializer:medical-code-details']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

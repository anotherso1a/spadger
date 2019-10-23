import { nest } from '../../src/array/nest';

let items = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 2 },
  { id: 4, parent_id: 1 }
];
nest(items, null, 'parent_id');

test('nest', () => {
  expect(nest(items, null, 'parent_id')).toEqual([
    {
      id: 1,
      parent_id: null,
      children: [
        {
          id: 2,
          parent_id: 1,
          children: [{ id: 3, parent_id: 2, children: [] }]
        },
        { id: 4, parent_id: 1, children: [] }
      ]
    }
  ]);
});

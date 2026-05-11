export const mockResources = [
  { id: 'wood', name: 'Деревина', icon: '🪵', quantity: 15 },
  { id: 'stone', name: 'Камінь', icon: '🪨', quantity: 7 },
  { id: 'water', name: 'Чиста вода', icon: '💧', quantity: 2 },
  { id: 'metal', name: 'Металобрухт', icon: '⚙️', quantity: 5 },
  { id: 'energy', name: 'Енергія', icon: '⚡', quantity: 0 },
];

export const mockRecipes = [
  {
    id: 'shield',
    resultName: 'Енергетичний Щит',
    resultIcon: '🛡️',
    requirements: [
      { resourceId: 'wood', requiredQty: 2 },
      { resourceId: 'stone', requiredQty: 5 },
    ],
  },
  {
    id: 'droid',
    resultName: 'Дроїд-помічник',
    resultIcon: '🤖',
    requirements: [
      { resourceId: 'metal', requiredQty: 3 },
      { resourceId: 'energy', requiredQty: 1 },
      { resourceId: 'water', requiredQty: 3 },
    ],
  },
  {
    id: 'battery',
    resultName: 'Плазмова батарея',
    resultIcon: '🔋',
    requirements: [
      { resourceId: 'metal', requiredQty: 2 },
      { resourceId: 'energy', requiredQty: 2 },
    ],
  },
];
export const ACTIONS = {
  ADD_RESOURCE: 'ADD_RESOURCE',
  REMOVE_RESOURCE: 'REMOVE_RESOURCE',
  CRAFT_ITEM: 'CRAFT_ITEM'
};
export const inventoryReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_RESOURCE:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item, quantity: item.quantity + 1
          }
        } else {
          return item
        }
      })
    case ACTIONS.REMOVE_RESOURCE:
      return state.map(item => {
        if (item.id === action.payload) {
          return item.quantity > 0
            ? {
              ...item, quantity: item.quantity - 1
            }
            : item;
        } else {
          return item
        }
      })
    case ACTIONS.CRAFT_ITEM:
      return state.map(item => {
        const requirement = action.payload.requirements.find(req => req.resourceId === item.id)
        if (requirement) {
          return {
            ...item, quantity: item.quantity - requirement.requiredQty
          }
        } else {
          return item
        }
      })
    default:
      return state;
  }
}
export const initInventory = (initialData) => {
  const saved = localStorage.getItem("inventory");
  return saved ? JSON.parse(saved) : initialData;
}
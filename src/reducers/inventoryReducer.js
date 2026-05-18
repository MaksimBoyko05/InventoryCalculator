export const ACTIONS = {
  ADD_RESOURCE: 'ADD_RESOURCE',
  REMOVE_RESOURCE: 'REMOVE_RESOURCE',
  CRAFT_ITEM: 'CRAFT_ITEM',
  CREATE_RESOURCE: 'CREATE_RESOURCE',
  DELETE_RESOURCE: 'DELETE_RESOURCE'
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
    case  ACTIONS.CREATE_RESOURCE:
      return [...state, action.payload]
    case ACTIONS.REMOVE_RESOURCE:
      return state.map(item => {
        if (item.id === action.payload) {
          return item.quantity > 0 ? {
            ...item, quantity: item.quantity - 1
          } : item;
        } else {
          return item
        }
      })
    case  ACTIONS.DELETE_RESOURCE:
      return state.filter(item => item.id !== action.payload)
    case ACTIONS.CRAFT_ITEM: {
      const stateAfterDeduction = state.map(item => {
        const requirement = action.payload.requirements.find(req => req.resourceId === item.id)
        if (requirement) {
          return {
            ...item, quantity: item.quantity - requirement.requiredQty
          }
        } else {
          return item
        }
      })
      if (stateAfterDeduction.find(item => item.id === action.payload.id)) {
        return stateAfterDeduction.map(item => {
          if (item.id === action.payload.id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      } else {
        return [...stateAfterDeduction, {
          id: action.payload.id, name: action.payload.resultName, icon: action.payload.resultIcon, quantity: 1,

        }]
      }
    }
    default:
      return state;
  }
}
export const initInventory = (initialData) => {
  const saved = localStorage.getItem("inventory");
  return saved ? JSON.parse(saved) : initialData;
}
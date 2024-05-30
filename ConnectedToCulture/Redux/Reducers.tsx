const initState: { items: any[], loading: boolean, error: null | string } = {
  items: [],
  loading: false,
  error: null,
};

export const plansReducer = (state = initState, action: { type: string, payload?: any, error?: any }) => {
  switch (action.type) {
    case "FETCH_PLANS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PLANS_SUCCESS":
      
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_PLANS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        items: [],
      };
    default:
      return state;
  }

};
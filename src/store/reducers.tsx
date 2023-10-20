interface User {
  name: string;
}

interface Action {
  type: string;
  payload: {
    user?: User;
    error?: string;
  };
}

const initialState = {
  isLoggedIn: false,
  user: null as User | null, 
  error: null as string | null, 
};

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login success...");
      console.log("New state:", {
        ...state,
        isLoggedIn: true,
        user: action.payload.user!,
        error: null,
      });
      debugger;
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user!,
        error: null,
      };
    case "LOGIN_FAILURE":
      console.log("Login failure ...");
      console.log("New state:", {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload.error!,
      });
      debugger;
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload.error!,
      };
    case "LOGOUT":
      console.log("Logout action...");
      console.log("New state:", {
        ...state,
        isLoggedIn: false,
        user: null,
        error: null,
      });
      debugger;
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;

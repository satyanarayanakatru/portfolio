export const initialState = {
  projects: [
    { id: 1, title: "Food App" },
    {
      id: 2,
      title: "Chat Application",
    },
  ],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload,
        ),
      };

    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project,
        ),
      };

    default:
      return state;
  }
};

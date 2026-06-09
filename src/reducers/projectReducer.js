export const initialState = {
  projects: [
    {
      id: 1,
      title: "Food Delivery App",
      technology: "React Native",
      category: "react-native",
      description:
        "An online food ordering platform featuring a stateful cart architecture, fluid multiscreen checkout sequencing, and dynamic system routing.",
    },
    {
      id: 2,
      title: "Chat Application",
      technology: "React Native",
      category: "react-native",
      description:
        "A secure cross-platform messaging layout built with persistent real-time communication tunnels, message caching, and active channel indicators.",
    },
    {
      id: 3,
      title: "Portfolio Website",
      technology: "React.js",
      category: "react",
      description:
        "A premium responsive single-page environment built with modular style sheets, system theme modules, and smooth visual interactive effects.",
    },
    {
      id: 4,
      title: "Todo App",
      technology: "JavaScript",
      category: "javascript",
      description:
        "A clean productivity management tracking interface exploring local asynchronous data handling, event delegation, and interactive DOM mutations.",
    },
    {
      id: 5,
      title: "Calculator App",
      technology: "JavaScript",
      category: "javascript",
      description:
        "A high-precision functional tool utilizing modular mathematical evaluation logic, expression calculations, and exception handling routines.",
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
          project.id === action.payload.id
            ? { ...project, ...action.payload }
            : project,
        ),
      };

    default:
      return state;
  }
};

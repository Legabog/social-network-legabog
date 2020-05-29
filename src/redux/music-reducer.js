const PUSH_VIEW = "PUSH_VIEW";
const POP_VIEW = "POP_VIEW";
const PUSH_POPUP = "PUSH_POPUP";
const POP_POPUP = "POP_POPUP";

let initialState = {
  stack: [
    {
      name: "Music lists",
      props: {},
    },
  ],
  popupStack: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PUSH_VIEW":
      return {
        ...state,
        stack: state.stack.concat(action.view),
      };
    case "POP_VIEW":
      return {
        ...state,
        stack: state.stack.slice(0, state.stack.length - 1),
      };
    case "PUSH_POPUP":
      return {
        ...state,
        popupStack: state.popupStack.concat(action.popup),
      };
    case "POP_POPUP":
      return {
        ...state,
        popupStack: state.popupStack.slice(0, state.popupStack.length - 1),
      };
    default:
      return state;
  }
};

export const pushView = (view) => ({ type: PUSH_VIEW, view });
export const popView = () => ({ type: POP_VIEW });
export const pushPopup = (popup) => ({ type: PUSH_POPUP, popup });
export const popPopup = () => ({ type: POP_POPUP });

export default musicReducer;

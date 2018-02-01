import { Alert } from 'react-native';

const initialState = {
  isFetching: false
};


export default (state = initialState, action) => {
  switch (action.type) {
  case 'general_ui_show_error':
    Alert.alert(action.message);
    return {
      ...state
    };
  case 'general_ui_fetching':
    return {
      ...state,
      ...{ isFetching: true }
    };
  case 'general_ui_fetched':
    return {
      ...state,
      ...{ isFetching: false }
    };
  default:
    return state;
  }
};

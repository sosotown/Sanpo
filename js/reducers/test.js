const initialState = {
  accessToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        accessToken: 'aaaa',
      };
    default:
      return state;
  }
};

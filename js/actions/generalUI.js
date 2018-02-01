export function showAlert(message) {
  return {
    type: 'general_ui_show_error',
    message
  };
}

export function startFetch(uri) {
  return {
    type: 'general_ui_fetching',
    uri
  };
}

export function endFetch(uri) {
  return {
    type: 'general_ui_fetched',
    uri
  };
}

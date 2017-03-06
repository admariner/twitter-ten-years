const data = (state = {
  didInvalidate: false,
  data: {}
}, action) => {
  switch (action.type) {
    case 'INVALIDATE_PAGE':
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case 'REQUEST_DATA':
      return Object.assign({}, state, {
        didInvalidate: false
      })
    case 'RECEIVE_DATA':
      return Object.assign({}, state, {
        didInvalidate: false,
        data: action.data,
      })
    default:
      return state
  }
}

function dataByPage(state = {}, action) {
  switch (action.type) {
    case 'INVALIDATE_PAGE':
    case 'REQUEST_DATA':
    case 'RECEIVE_DATA':
      return Object.assign({}, state, {
        [action.page]: data(state[action.page], action)
      })
    default:
      return state
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case 'INVALIDATE_PAGE':
    case 'REQUEST_DATA':
      return true
    case 'RECEIVE_DATA':
      return false
    default:
      return state
  }
}
export { dataByPage, isFetching }
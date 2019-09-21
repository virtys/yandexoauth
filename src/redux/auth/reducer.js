import { auth } from './routines'

const initialState = {
  data: null,
  loading: false,
  error: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case auth.TRIGGER:
      return {
        ...state,
        loading: true
      }
    case auth.SUCCESS:
      return {
        ...state,
        loading: false
      }
    case auth.FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

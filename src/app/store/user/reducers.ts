import * as UserActions from './actions'

export const initialState: object = {
  id: '19',
  // user will have a camp id
  // if the user has no camp id, then we cannot login
  camp_id: '10',
  name: 'Admin Essapp',
  role: 'camp_officer',
  email: 'admin@esapp.gov.zm',
  avatar: '',
  authorized: true,
  loading: false,
}

export function reducer(state = initialState, action: UserActions.Actions): object {
  switch (action.type) {
    case UserActions.LOGIN:
    case UserActions.LOAD_CURRENT_ACCOUNT:
      return {
        ...state,
        loading: true,
      }
    case UserActions.LOGIN_SUCCESSFUL:
    case UserActions.LOAD_CURRENT_ACCOUNT_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
        loading: false,
        authorized: true,
      }
    case UserActions.LOGIN_UNSUCCESSFUL:
    case UserActions.LOAD_CURRENT_ACCOUNT_UNSUCCESSFUL:
      return {
        ...state,
        loading: false,
        authorized: false,
      }
    case UserActions.FLUSH_USER:
      return {
        id: '',
        camp_id: '',
        name: '',
        role: '',
        email: '',
        avatar: '',
        authorized: false,
        loading: false,
      }
    case UserActions.EMPTY_ACTION:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export const getUser = (state: any) => state

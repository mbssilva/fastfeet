import { combineReducers } from 'redux';

import session from './session/reducer';
import application from './application/reducer';

export default combineReducers({ session, application });

import { FETCH_EMPLOYEE_BY_ID_USER, FETCH_EMPLOYEES } from "../actions/actionType";

const initialState = { projects: [], project: {} };

function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEE_BY_ID_USER:
            return { ...state, project: action.payload }
        case FETCH_EMPLOYEES:
            return { ...state, projects: action.payload };
        default:
            return state;
    }
}

export default employeeReducer 
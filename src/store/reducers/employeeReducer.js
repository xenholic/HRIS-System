import { FETCH_EMPLOYEE_BY_ID_USER, FETCH_EMPLOYEES } from "../actions/actionType";

const initialState = { employees: [], employee: {} };

function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEE_BY_ID_USER:
            return { ...state, employee: action.payload }
        case FETCH_EMPLOYEES:
            return { ...state, employees: action.payload };
        default:
            return state;
    }
}

export default employeeReducer 
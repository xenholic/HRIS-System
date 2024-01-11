import { FETCH_EMPLOYEE_BY_ID_USER, FETCH_EMPLOYEES, FETCH_COMPANIES, FETCH_COMPANIES_BY_ID_COMPANY } from "../actions/actionType";

const initialState = { employees: [], employee: {}, companies: [], company: {} };

function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEE_BY_ID_USER:
            return { ...state, employee: action.payload }
        case FETCH_EMPLOYEES:
            return { ...state, employees: action.payload };
        case FETCH_COMPANIES:
            return { ...state, companies: action.payload }
        case FETCH_COMPANIES_BY_ID_COMPANY:
            return { ...state, company: action.payload };
        default:
            return state;
    }
}

export default employeeReducer 
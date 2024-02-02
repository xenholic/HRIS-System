import { FETCH_EMPLOYEE_BY_ID_USER, FETCH_EMPLOYEES, PAGINATION_EMPLOYEES,  FETCH_COMPANIES, FETCH_COMPANIES_BY_ID_COMPANY, ADD_EMPLOYEE } from "../actions/actionType";

const initialState = { employees: [], pagination: {}, employee: {}, companies: [], company: {} , add_employees: {}};

function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEE_BY_ID_USER:
            return { ...state, employee: action.payload };
        case PAGINATION_EMPLOYEES:
            return { ...state, pagination: action.payload };
        case FETCH_EMPLOYEES:
            return { ...state, employees: action.payload };
        case FETCH_COMPANIES:
            return { ...state, companies: action.payload };
        case FETCH_COMPANIES_BY_ID_COMPANY:
            return { ...state, company: action.payload };
        case ADD_EMPLOYEE: // Add this case for adding an employee
            return { ...state, add_employees: [...state.employees, action.payload] };
        default:
            return state;
    }
}

export default employeeReducer
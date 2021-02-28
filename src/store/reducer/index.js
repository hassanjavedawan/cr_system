const INIIAL_STATE = {
    companyData: [],
    studentData: [],
    curruntUser: [],
    curruntUser1: []

}

export default (state = INIIAL_STATE, action) => {
    switch (action.type) {
        case "Company":
            return ({
                ...state,
                companyData: action.payload
            })
        case "student":
            return ({
                ...state,
                studentData: action.payload
            })
        case "currunt":
            return ({
                ...state,
                curruntUser: action.payload
            })
            case "currunt1":
                return ({
                    ...state,
                    curruntUser1: action.payload
                })
    }
    return state;
}
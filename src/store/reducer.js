const initialState = {
    text: "",
    time: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'HOUR':
        let daytype = null;
        //logic for morning, day, evening and night
            if (action.val > 4 && action.val < 12) {
                daytype = "Morning";
            }
            else if(action.val >= 12 && action.val <= 17) {
                daytype = "Afternoon";
            }
            else if(action.val >= 17 && action.val <= 19) {
                daytype = "Evening";
            }
            else {
                daytype = "Night";
            }
        return {
            ...state,
            text: daytype
        }
        case 'TIME':
        return {
            ...state,
            time: action.val
        }
        default:
        return state;
    }
};

export default reducer;
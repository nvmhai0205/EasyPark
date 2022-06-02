import historyReducer from "./history";
import verifyReducer from "./verify";
import currentReducer from "./current";

const rootReducer = {
    History: historyReducer,
    Verify: verifyReducer,
    Current: currentReducer,    
}

export default rootReducer;
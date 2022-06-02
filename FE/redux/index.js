import historyReducer from "./history";
import verifyReducer from "./verify";

const rootReducer = {
    History: historyReducer,
    Verify: verifyReducer,
}

export default rootReducer;
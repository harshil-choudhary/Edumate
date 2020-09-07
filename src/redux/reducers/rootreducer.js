import { combineReducers } from "redux"
import classes from "./classes"
import topics from "./topics"
import subjects from "./subjects"
import queryform from "./queryform"

const rootReducer = combineReducers({
  classes: classes,
  topics: topics,
  subjects: subjects,
  queryform: queryform,
})

export default rootReducer
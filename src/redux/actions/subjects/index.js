import axios from 'axios';
export const classes = (class_id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://xymbolics.com/api/subjects?class_id"+class_id)
      .then((response) => {
        dispatch({
          type: 'SUBJECTS',
          payload: response.data.data,
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
import axios from 'axios';
export const classes = (subject_id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://xymbolics.com/api/topics?subject_id"+subject_id)
      .then((response) => {
        dispatch({
          type: 'TOPICS',
          payload: response.data.data,
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
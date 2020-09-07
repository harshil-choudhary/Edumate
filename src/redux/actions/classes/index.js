import axios from 'axios';
export const classes = () => {
  return async (dispatch, getState) => {
    await axios
      .get("http://xymbolics.com/api/classes")
      .then((response) => {
        dispatch({
          type: 'CLASSES',
          payload: response.data.data,
          
        });
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
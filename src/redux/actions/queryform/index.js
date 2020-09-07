import axios from 'axios';
export const queryform = (post_data) => {
  return async (dispatch, getState) => {
    var url = 'http://xymbolics.com/api/submit_query?name='+post_data.name+'&email='+post_data.email+'&phoneNo='+post_data.phoneNo+'&adress='+post_data.adress+'&school='+post_data.school+'&class='+post_data.class+'&subject='+post_data.subject+'&topic='+post_data.topic+'&date='+post_data.date
    console.log(url)
    await axios
      .post(url,{})
      .then((response) => {
        dispatch({
          type: 'QUERY',
          payload: response.data.data,
          
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
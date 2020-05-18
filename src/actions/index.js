import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";


export const fetchPostAndUser = ()=> async(dispatch , getState)=>{
   await dispatch(fetchPosts());

  //  const userIds = _.uniq(_.map(getState().posts , 'userId'));
  //  userIds.map(id=> dispatch(fetchUser(id)));


  //  lodash chaining technic
   _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id)=>dispatch(fetchUser(id)))
    .value()

}



export const fetchPosts = () => async (dispatch) => {
  let response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: {
      value: response.data,
    },
  });
};


export const fetchUser = id => async (dispatch) =>{
  let response = await jsonPlaceholder.get(`/users/${id}`);
   dispatch({
     type: "FETCH_USER",
     payload: {
       user : response.data,
     },
   });
};



// lodash memoize implementation

// export const fetchUser = id => (dispatch) =>{
//   return _fetchUser(id , dispatch);
// };
// const _fetchUser = _.memoize( async (id , dispatch) => {
//   let response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: {
//       user : response.data,
//     },
//   });
// });

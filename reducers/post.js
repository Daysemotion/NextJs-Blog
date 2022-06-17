const ADD_POST = "ADD_POST";

export const addPost = (data) => {
  return {
    type: ADD_POST,
    data,
  };
};

const initialState = {
  post: [
    {
      title: "Next Js를 사용해 블로그 개설하기.",
      content: "준비중 입니다",
      comment: ["잘 봤습니다", "도움이 됐어요"],
      thumbnail: {
        src: "https://dummyimage.com/600x400/000/fff",
      },
    },
  ],
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        post: [...post, action.data],
      };
    default:
      return state;
  }
};

export default post;

import axios from 'axios';

export const filterErrors = (label: string, message?: Array<string>) => {
  if (!message || !message.length) return '';
  const errors = message.filter((message?: string) => {
    if (message && message.includes(label)) {
      return message;
    }
  });

  if (errors.length) {
    return errors.reduce(
      (wholeString, message: string) => message + '. ' + wholeString
    );
  } else {
    return '';
  }
};

export const emptyErrors = {
  username: '',
  password: '',
  email: '',
  general: '',
};

export const postNotice = async (
  notice: string,
  title: string,
  userID: number,
  token: string
) => {
  const noticeObject = {
    text: notice,
    title: title,
    userId: userID,
  };
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + '/notice',
      JSON.stringify(noticeObject),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return response.data.id;
  } catch (err: unknown) {
    return false;
  }
};

export const updateNotice = async (
  notice: string,
  title: string,
  noticeID: number,
  token: string
) => {
  const noticeObject = {
    text: notice,
    title: title,
  };
  try {
    const response = await axios.patch(
      process.env.REACT_APP_API_URL + '/notice/' + noticeID,
      JSON.stringify(noticeObject),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return response.data.id;
  } catch (err: unknown) {
    return false;
  }
};

export const deleteNotice = async (noticeID: number, token: string) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + '/notice/' + noticeID,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return response.data;
  } catch (err: unknown) {
    return false;
  }
};

export const getComments = async (noticeID: number) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + '/notice/comment/' + noticeID,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (err: unknown) {
    return [];
  }
};

export const postComment = async (
  comment: string,
  userID: number,
  noticeID: number,
  token: string
) => {
  const commentObject = {
    text: comment,
    userId: userID,
    noticeId: noticeID,
  };
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + '/notice/comment',
      JSON.stringify(commentObject),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return response.data.id;
  } catch (err: unknown) {
    console.log(err);
    return false;
  }
};

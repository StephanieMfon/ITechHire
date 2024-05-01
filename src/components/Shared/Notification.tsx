import { notification } from 'antd';

interface IProps {
  type: 'success' | 'error';
  message: string;
}

const openNotification = (props: IProps) => {
  const { type, message } = props;

  notification[type]({
    message,
  });
};

export default openNotification;

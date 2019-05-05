import notificationDOM from './Notification';


let notification: any;
const notice = (type: string, content: string, duration = 2000, onClose: any) => {
  if (!notification) notification = notificationDOM;
  return notification.addNotice({ type, content, duration, onClose });
};

export default {
  info(content: string, duration: number, onClose?: any) {
    return notice('info', content, duration, onClose);
  },
  success(content: string, duration: number, onClose?: any) {
    return notice('success', content, duration, onClose);
  },
  warning(content: string, duration: number, onClose?: any) {
    return notice('warning', content, duration, onClose);
  },
  error(content: string, duration: number, onClose?: any) {
    return notice('error', content, duration, onClose);
  },
  loading(content: string, duration = 0, onClose?: any) {
    return notice('loading', content, duration, onClose);
  }
};

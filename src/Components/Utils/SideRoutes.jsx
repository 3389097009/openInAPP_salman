import DashboardIcon from '../../assets/Category.svg';
import UploadIcon from '../../assets/upload.png';
// import InboxIcon from '../../assets/InboxIcon.svg';
import InvoiceIcon from '../../assets/Ticket.svg';
import DocumentIcon from '../../assets/Document.svg';
// import CalenderIcon from '../../assets/Calender.svg';

// import CalenderIcon from '../../assets/Calender.svg';
import NotificationIcon from '../../assets/Notification.svg';
import SettingsIcon from '../../assets/Setting.svg';

export const routes = [
  {
    icon: DashboardIcon,
    name: 'Dashboard',
    path: '/',
    // element: <TeamMember darkMode={false} />,
  },
  {
    icon: UploadIcon,
    name: 'Upload',
    path: '/upload',
    // element: <Product />,
  },
  {
    icon: InvoiceIcon,
    name: 'Invoice',
    path: '/invoice',
    // element: <Inbox />,
  },
  {
    icon: DocumentIcon,
    name: 'Schedule',
    path: '/schedule',
    // element: <Inbox />,
  },
  {
    icon: DocumentIcon,
    name: 'Calender',
    path: '/calender',
    // element: <Inbox />,
  },
  {
    icon: NotificationIcon,
    name: 'Notification',
    path: '/notification',
    // element: <Inbox />,
  },
  {
    icon: SettingsIcon,
    name: 'Settings',
    path: '/settings',
    // element: <Inbox />,
  },
];

export default routes;

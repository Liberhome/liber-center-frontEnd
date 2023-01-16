import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';
import {Blog_REPO, GITHUB_REPO} from "@/constants";

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced_liberhome',
    defaultMessage: 'liberhome@163.com出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'blog',
          title: 'Liberhome Blog',
          href: Blog_REPO,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> Liberhome GitHub</>,
          href: GITHUB_REPO,
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;

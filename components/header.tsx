/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useSession } from 'next-auth/client';
import { Avatar, Layout, Menu, Dropdown } from 'antd';
import { signOut } from 'next-auth/client';

const { Header } = Layout;

const iconImg = 'https://www.flaticon.com/svg/static/icons/svg/3578/3578882.svg';
const logo = css`
  float: left;
  margin-right: 28px;
  max-height: 2.5em;
`;
const alignment = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const avatar = css`
  cursor: pointer;
`;

export default () => {
  const [session] = useSession();

  return (
    <Header css={alignment}>
      <div css={alignment}>
        <img src={iconImg} css={logo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </div>

      <Dropdown
        trigger={['click']}
        overlay={
          <Menu>
            <Menu.Item onClick={signOut}>Sign out</Menu.Item>
          </Menu>
        }
      >
        <Avatar css={avatar} src={session.user.image} />
      </Dropdown>
    </Header>
  );
};

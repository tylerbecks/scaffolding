/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useSession } from 'next-auth/client';
import { signIn } from 'next-auth/client';
import { Spin, Button } from 'antd';

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

type Props = { Page: React.ReactNode };

export default function AuthGateway({ Page }: Props) {
  const [session, loading] = useSession();

  if (loading) {
    return (
      <main css={container}>
        <Spin size="large" />
      </main>
    );
  }

  if (!session) {
    return (
      <main css={container}>
          <Button type="primary" onClick={() => signIn('google')}>
            Sign in
          </Button>
      </main>
    );
  }

  return Page;
}

import React from 'react';
import { Button, Popover } from 'antd';
import { CurrentUserBadge } from '../CurrentUserBadge';
import { SettingOutlined } from '@ant-design/icons';
import { Settings } from '../Settings';
import { LABELS } from '../../constants/labels';
import { ConnectButton } from '..';
import { useWallet } from '@solana/wallet-adapter-react';

export const AppBar = (props: {
  left?: JSX.Element;
  right?: JSX.Element;
  useWalletBadge?: boolean;
  additionalSettings?: JSX.Element;
}) => {
  const { connected } = useWallet();

  const TopBar = (
    <div className="App-Bar-right2">
      {props.left}
      {connected ? (
        <CurrentUserBadge />
      ) : (
        <ConnectButton
          type="text"
          size="large"
          style={{ color: '#2abdd2' }}
          allowWalletChange
        />
      )}
      <Popover
        placement="topRight"
        title={LABELS.SETTINGS_TOOLTIP}
        content={<Settings additionalSettings={props.additionalSettings} />}
        trigger="click"
      >
        <Button
          shape="circle"
          size="large"
          type="text"
          icon={<SettingOutlined />}
        />
      </Popover>
      {props.right}
    </div>
  );

  return TopBar;
};

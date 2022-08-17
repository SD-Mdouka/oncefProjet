import React from 'react';
import 'antd/dist/antd.css';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const menu = (
  <Menu
    className='mt-5 p-9 border'
    items={[
      {
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.antgroup.com'
          >
            1st menu item
          </a>
        ),
        key: '0',
      },
      {
        type: 'divider',
      },
      {
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.aliyun.com'
          >
            2nd menu item
          </a>
        ),
        key: '1',
      },
    ]}
  />
);

const DropdownVoyger = () => (
  <Dropdown className='InputStyle inputInside' overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <span
        style={{
          borderColor: '#bda7ef',
          color: '#4a20aa',
          lineHeight: '2px',
          letterSpacing: '1px',
        }}
      >
        <Space>
          <UserOutlined />1 Adulte
        </Space>
      </span>
    </a>
  </Dropdown>
);

export default DropdownVoyger;

import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import FunctionCounter from '../../../../helpers/FunctionCounter';

const menu = (
  <Menu
    id='dropMenu'
    onClick={(e) => e.preventDefault()}
    className='w-[130%] !absolute !left-2'
    items={[
      {
        label: <FunctionCounter countAdulte={1} nameUser='Adulte' />,
        key: '0',
      },
      {
        type: 'divider',
      },
      {
        label: <FunctionCounter countEnfant={0} nameUser='Enfant' />,
        icon: <UserOutlined className=' !text-[#4a20aa]' />,
        key: '1',
      },
    ]}
  />
);

const DropdownVoyger = () => {
  return (
    <Dropdown
      id='dropMenu'
      className='InputStyle inputInside'
      trigger={['click']}
      overlay={menu}
    >
      <a>
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
};

export default DropdownVoyger;

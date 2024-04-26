import React from 'react';
import { Space, Switch } from 'antd';


const Toggle = ({ checked, onChange}) => {

  // Just a litle testing here to check the togglling method
  // if (checked === true) {
  //   console.log("The option for this is now ON");
  // } else if (checked === false) {
  //   console.log("The option for this is now OFF");
  // } else {
  //   console.log("I don't even know what I want");
  // }

  return (

    <Space direction="vertical">
      <Space wrap>
        <Switch
          checked={checked}
          onChange={onChange}
          style={{ backgroundColor: checked ? '#4F0B92' : '#d2d2d2', borderColor: checked ? '#4F0B92' : '#d2d2d2' }}
          checkedChildren={<span style={{ color: '#fff' }}> On </span>}
          unCheckedChildren={<span style={{ color: '#4F0B92' }}> Off </span>}
        />
      </Space>
    </Space>
  );

  

};


export default Toggle;
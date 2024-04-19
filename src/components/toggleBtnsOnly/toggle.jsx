import React, {useState } from 'react';
import { Space, Switch } from 'antd';


const Toggle = () => {
  // The false param in the following useState is for the setting the toglling
  // to Off.
  const [input, setInput] = useState(false);
  
  // Just a litle testing here to check the togglling method
  // if (input === true) {
  //   console.log("The option for this is now ON");
  // } else if (input === false) {
  //   console.log("The option for this is now OFF");
  // } else {
  //   console.log("I don't even know what I want");
  // }

  return (
    <Space direction="vertical" >
      <Space wrap>
        <Switch checked={input} 
          style={{ backgroundColor: input ? '#4F0B92' : '#d2d2d2', borderColor: input ? '#4F0B92' : '#d2d2d2' }}
          checkedChildren={<span style={{ color: '#fff' }}> On </span>}
          unCheckedChildren={<span style={{ color: '#4F0B92' }}> Off </span>}
          onChange={() => {
            setInput(!input);
          }} />
      </Space>
    </Space>
  );

};


export default Toggle;
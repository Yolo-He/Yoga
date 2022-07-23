import { Switch } from 'antd';
import { useState } from 'react';

export default function Item(props: any) {
  const { u_item, today } = props;
  const [blacklist, setblacklist] = useState(false);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <ul className={today === u_item.appo_time.split(' ')[0] ?
      "list_item green" : "list_item"} >
      <li>{u_item.u_name}</li>
      <li>{u_item.appo_time.substr(5)}</li>
      <li>{u_item.cost}</li>
      <li><Switch defaultChecked onChange={onChange} /></li>
    </ul>
  )
}

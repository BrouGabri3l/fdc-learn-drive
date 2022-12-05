import React from  'react'
import {Button} from '../components/Button'
export default{
    title:'Buttons',
    component:Button.Base,
}    
const Template = (args) => <Button.Base {...args} />;
export const Primary = Template.bind({})
Primary.args = {
    children:(<Button.Primary >Primary Button</Button.Primary>),
}
export const Secondary = Template.bind({})
import React from  'react'
import {Button} from '../components/Button'
export default{
    title:'Buttons',
    component:Button.Base
}
const Template = (args) => <Button.Base {...args} />;
export const Primary = Template.bind({})
Primary.args = {children:"Primary Button",className:"text-yellow-500"}
export const Secondary = Template.bind({})
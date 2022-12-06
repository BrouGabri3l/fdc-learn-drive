import React from 'react'
import Button from '../components/Button'
export default {
    title: 'Buttons',
    component: Button.Root,
}
const Template = (args) => <Button.Primary {...args} />;
export const Primary = Template.bind({})
Primary.args = {
    children:"Primary Button",
    icon:"/Frame.svg"
        
}
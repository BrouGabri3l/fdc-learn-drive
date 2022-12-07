import React from 'react'
import Button from '../components/Button'
export default {
    title: 'Buttons',
    component: Button,
}
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({})
Primary.args = {
    children:"Primary Button",
    icon: "/Frame.svg",
    theme: "primary"    
}
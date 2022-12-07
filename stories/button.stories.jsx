import React from 'react'
import Button from '../components/Button'
import {FrameIcon,PlusIcon,DownloadIcon} from '../components/icons';
export default {
    title: 'Buttons',
    component: Button,
}
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({})
Primary.args = {
    children:"Primary Button",
    icon:  FrameIcon,  
    theme: "primary"
}
export const Secondary = Template.bind({})
Secondary.args={
    children:"Secondary Button",
    icon: PlusIcon,
    theme: "secondary"
}
export const Outline = Template.bind({})
Outline.args={
    children:"Outline Button",
    icon: DownloadIcon,
    theme: "outline"
}
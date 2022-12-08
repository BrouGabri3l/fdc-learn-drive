import Header from "../components/Header"

export default{
    title:"Header",
    component:Header
}
const Template = (args)=> <Header {...args}/>
export const Desktop = Template.bind({})
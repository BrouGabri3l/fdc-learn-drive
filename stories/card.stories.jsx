import React from 'react'
import { Card } from "../components/Card";
import { AcademyIcon } from "../components/icons"
export default {
    title: "Card",
    component: Card
}
const Template = args => <Card {...args} />
export const Desktop = Template.bind({})
Desktop.args = {
    Icon: AcademyIcon,
    children: (
    <>
        <strong>Learn</strong>: mais de < strong > 220 módulos</strong >, distribuídos em 7 dimensões empresariais
    </>)
}
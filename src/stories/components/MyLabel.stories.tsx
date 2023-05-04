import {
    ComponentMeta,
    ComponentStory
} from "@storybook/react";
import {MyLabel} from "../../components/MyLabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary']},
        fontColor: { control: 'color'}
    }
}  as ComponentMeta<typeof MyLabel>

export const template:ComponentStory<typeof MyLabel> = (args) => {
    return (
        <MyLabel {...args}/>
    )
}

export const Basic = template.bind({});
Basic.args = {
    size: "normal",
    allCaps: false // upper case all words
}

export const AllCaps = template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}
export const Secondary = template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary',
}

export const Tertiary = template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
}

export const customFontColor = template.bind({});
customFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}
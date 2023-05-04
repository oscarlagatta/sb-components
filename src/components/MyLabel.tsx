import './MyLabel.css';


interface Props {
    /**
     * This is the Text that will be displayed
     */
    label: string;
    /**
     * This is the size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Sets uppercase true/false
     */
    allCaps: boolean;
    /**
     * Sets the different types of colors
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom font color
     */
    fontColor?: string;
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: Props) => {
    return (
        <span className={`label ${size} text-${color} `}
            style={{color: fontColor}}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>

    )
}

export default MyLabel;
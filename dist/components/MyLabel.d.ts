/// <reference types="react" />
import './MyLabel.css';
export interface Props {
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
export default MyLabel;

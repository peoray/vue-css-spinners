import { CSSProperties } from 'vue'

export interface Props {
	className?: string
	color?: string
	size?: number
	style?: CSSProperties
}

export interface Styles extends CSSProperties {
	'--rcs-circle-color'?: string
	'--rcs-circle-size'?: string
}

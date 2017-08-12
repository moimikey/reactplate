import cxs from 'cxs/component'
import themes from '../../../config/themes'

const Button = cxs('button')`
border: 0;
color: ${themes.primary.colorPrimary};
display: inline-block;
font-family: ${themes.primary.defaultFont};
font-size: ${themes.primary.defaultFontSize};
background-color: ${themes.primary.colorSecondary};
margin: 0;
padding: 4px 8px;
`

export default Button

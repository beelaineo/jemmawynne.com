declare module '@xstyled/styled-components' {
  import styled, {
    StyledComponent,
    DefaultTheme,
    FlattenSimpleInterpolation,
  } from 'styled-components'
  export * from 'styled-components'

  interface Breakpoints {
    xs: any
    sm: any
    md: any
    lg: any
    xl: any
  }

  type BreakpointObject<ArgType> = {
    [Key in keyof Breakpoints]?: ArgType
  }

  /* Augments a type to be Type | BreakpointObject<Type>,
   * in other words, allow a property to be `1` or `{ xs: 1, sm: 2 }`
   */
  type WithBreakpointArgs<Props> = {
    [Key in keyof Props]?: Props[Key] | BreakpointObject<Props[Key]>
  }

  interface BoxPropsBase {
    /* See props documentation at:
     * https://www.smooth-code.com/open-source/smooth-ui/docs/box/#box-2
     */
    background: number | string
    backgroundColor: number | string
    backgroundImage: number | string
    backgroundSize: number | string
    backgroundPosition: number | string
    backgroundRepeat: number | string
    opacity: number | string
    overflow: number | string
    transition: number | string
    border: number | string
    borderTop: number | string
    borderTopColor: number | string
    borderRight: number | string
    borderRightColor: number | string
    borderBottom: number | string
    borderBottomColor: number | string
    borderLeft: number | string
    borderLeftColor: number | string
    borderColor: number | string
    borderWidth: number | string
    borderStyle: number | string
    borderRadius: number | string
    display: number | string
    alignItems: number | string
    alignContent: number | string
    justifyContent: number | string
    justifyItems: number | string
    flexWrap: number | string
    flexBasis: number | string
    flexDirection: number | string
    flex: number | string
    justifySelf: number | string
    alignSelf: number | string
    order: number | string
    gridGap: number | string
    gridColumnGap: number | string
    gridRowGap: number | string
    gridColumn: number | string
    gridRow: number | string
    gridAutoFlow: number | string
    gridAutoColumns: number | string
    gridAutoRows: number | string
    gridTemplateColumns: number | string
    gridTemplateRows: number | string
    gridTemplateAreas: number | string
    gridArea: number | string
    width: number | string
    height: number | string
    maxWidth: number | string
    maxHeight: number | string
    minWidth: number | string
    minHeight: number | string
    size: number | string
    verticalAlign: number | string
    position: number | string
    zIndex: number | string
    top: number | string
    right: number | string
    bottom: number | string
    left: number | string
    boxShadow: number | string
    textShadow: number | string
    margin: number | string
    m: number | string
    marginTop: number | string
    mt: number | string
    marginRight: number | string
    mr: number | string
    marginBottom: number | string
    mb: number | string
    marginLeft: number | string
    ml: number | string
    mx: number | string
    my: number | string
    padding: number | string
    p: number | string
    paddingTop: number | string
    pt: number | string
    paddingRight: number | string
    pr: number | string
    paddingBottom: number | string
    pb: number | string
    paddingLeft: number | string
    pl: number | string
    px: number | string
    py: number | string
    fontFamily: number | string
    fontSize: number | string
    lineHeight: number | string
    fontWeight: number | string
    textAlign: number | string
    letterSpacing: number | string
    color: number | string
    textTransform: number | string
    row: number | string
    col: number | string
  }

  /* adds support for { xs: arg } and makes all props optional */
  export type BoxProps = WithBreakpointArgs<BoxPropsBase>

  // type BoxPropsWithBreakpointArgs = WithBreakpointArgs<BoxProps>
  // export const Box: React.ComponentType<BoxProps>
  export const Box: StyledComponent<
    'div',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >

  export const breakpoints: (
    styles: BreakpointObject<FlattenSimpleInterpolation | string>,
  ) => TemplateStringsArray

  /** Support for xxBoxes, i.e. aBox, articleBox
   * List of dom elements from Styled Components:
   * https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/domElements.js */

  export const aBox: StyledComponent<
    'a',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const abbrBox: StyledComponent<
    'abbr',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const addressBox: StyledComponent<
    'address',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const areaBox: StyledComponent<
    'area',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const articleBox: StyledComponent<
    'article',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const asideBox: StyledComponent<
    'aside',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const audioBox: StyledComponent<
    'audio',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const bBox: StyledComponent<
    'b',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const baseBox: StyledComponent<
    'base',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const bdiBox: StyledComponent<
    'bdi',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const bdoBox: StyledComponent<
    'bdo',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const bigBox: StyledComponent<
    'big',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const blockquoteBox: StyledComponent<
    'blockquote',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const bodyBox: StyledComponent<
    'body',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const brBox: StyledComponent<
    'br',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const buttonBox: StyledComponent<
    'button',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const canvasBox: StyledComponent<
    'canvas',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const captionBox: StyledComponent<
    'caption',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const citeBox: StyledComponent<
    'cite',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const codeBox: StyledComponent<
    'code',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const colBox: StyledComponent<
    'col',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const colgroupBox: StyledComponent<
    'colgroup',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const dataBox: StyledComponent<
    'data',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const datalistBox: StyledComponent<
    'datalist',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const ddBox: StyledComponent<
    'dd',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const delBox: StyledComponent<
    'del',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const detailsBox: StyledComponent<
    'details',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const dfnBox: StyledComponent<
    'dfn',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const dialogBox: StyledComponent<
    'dialog',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const divBox: StyledComponent<
    'div',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const dlBox: StyledComponent<
    'dl',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const dtBox: StyledComponent<
    'dt',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const emBox: StyledComponent<
    'em',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const embedBox: StyledComponent<
    'embed',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const fieldsetBox: StyledComponent<
    'fieldset',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const figcaptionBox: StyledComponent<
    'figcaption',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const figureBox: StyledComponent<
    'figure',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const footerBox: StyledComponent<
    'footer',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const formBox: StyledComponent<
    'form',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const h1Box: StyledComponent<
    'h1',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const h2Box: StyledComponent<
    'h2',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const h3Box: StyledComponent<
    'h3',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const h4Box: StyledComponent<
    'h4',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const h5Box: StyledComponent<
    'h5',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const h6Box: StyledComponent<
    'h6',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const headBox: StyledComponent<
    'head',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const headerBox: StyledComponent<
    'header',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const hgroupBox: StyledComponent<
    'hgroup',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const hrBox: StyledComponent<
    'hr',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const htmlBox: StyledComponent<
    'html',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const iBox: StyledComponent<
    'i',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const iframeBox: StyledComponent<
    'iframe',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const imgBox: StyledComponent<
    'img',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const inputBox: StyledComponent<
    'input',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const insBox: StyledComponent<
    'ins',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const kbdBox: StyledComponent<
    'kbd',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const keygenBox: StyledComponent<
    'keygen',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const labelBox: StyledComponent<
    'label',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const legendBox: StyledComponent<
    'legend',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const liBox: StyledComponent<
    'li',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const linkBox: StyledComponent<
    'link',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const mainBox: StyledComponent<
    'main',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const mapBox: StyledComponent<
    'map',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const markBox: StyledComponent<
    'mark',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >

  /* This one breaks, it looks like marquee is not supported in JSX.IntrinsicElements */
  // export const marqueeBox: StyledComponent<'marquee', DefaultTheme, WithBreakpointArgs<BoxProps>>

  export const menuBox: StyledComponent<
    'menu',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const menuitemBox: StyledComponent<
    'menuitem',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const metaBox: StyledComponent<
    'meta',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const meterBox: StyledComponent<
    'meter',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const navBox: StyledComponent<
    'nav',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const noscriptBox: StyledComponent<
    'noscript',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const objectBox: StyledComponent<
    'object',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const olBox: StyledComponent<
    'ol',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const optgroupBox: StyledComponent<
    'optgroup',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const optionBox: StyledComponent<
    'option',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const outputBox: StyledComponent<
    'output',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const pBox: StyledComponent<
    'p',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const paramBox: StyledComponent<
    'param',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const pictureBox: StyledComponent<
    'picture',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const preBox: StyledComponent<
    'pre',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const progressBox: StyledComponent<
    'progress',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const qBox: StyledComponent<
    'q',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const rpBox: StyledComponent<
    'rp',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const rtBox: StyledComponent<
    'rt',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const rubyBox: StyledComponent<
    'ruby',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const sBox: StyledComponent<
    's',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const sampBox: StyledComponent<
    'samp',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const scriptBox: StyledComponent<
    'script',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const sectionBox: StyledComponent<
    'section',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const selectBox: StyledComponent<
    'select',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const smallBox: StyledComponent<
    'small',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const sourceBox: StyledComponent<
    'source',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const spanBox: StyledComponent<
    'span',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const strongBox: StyledComponent<
    'strong',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const styleBox: StyledComponent<
    'style',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const subBox: StyledComponent<
    'sub',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const summaryBox: StyledComponent<
    'summary',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const supBox: StyledComponent<
    'sup',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const tableBox: StyledComponent<
    'table',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const tbodyBox: StyledComponent<
    'tbody',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const tdBox: StyledComponent<
    'td',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const textareaBox: StyledComponent<
    'textarea',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const tfootBox: StyledComponent<
    'tfoot',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const thBox: StyledComponent<
    'th',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const theadBox: StyledComponent<
    'thead',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const timeBox: StyledComponent<
    'time',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const titleBox: StyledComponent<
    'title',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const trBox: StyledComponent<
    'tr',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const trackBox: StyledComponent<
    'track',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const uBox: StyledComponent<
    'u',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const ulBox: StyledComponent<
    'ul',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const varBox: StyledComponent<
    'var',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const videoBox: StyledComponent<
    'video',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const wbrBox: StyledComponent<
    'wbr',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >

  // SVG
  export const circleBox: StyledComponent<
    'circle',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const clipPathBox: StyledComponent<
    'clipPath',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const defsBox: StyledComponent<
    'defs',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const ellipseBox: StyledComponent<
    'ellipse',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const foreignObjectBox: StyledComponent<
    'foreignObject',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const gBox: StyledComponent<
    'g',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const imageBox: StyledComponent<
    'image',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const lineBox: StyledComponent<
    'line',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const linearGradientBox: StyledComponent<
    'linearGradient',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const markerBox: StyledComponent<
    'marker',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const maskBox: StyledComponent<
    'mask',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const pathBox: StyledComponent<
    'path',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const patternBox: StyledComponent<
    'pattern',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const polygonBox: StyledComponent<
    'polygon',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const polylineBox: StyledComponent<
    'polyline',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const radialGradientBox: StyledComponent<
    'radialGradient',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const rectBox: StyledComponent<
    'rect',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const stopBox: StyledComponent<
    'stop',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const svgBox: StyledComponent<
    'svg',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const textBox: StyledComponent<
    'text',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export const tspanBox: StyledComponent<
    'tspan',
    DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >
  export default styled
}

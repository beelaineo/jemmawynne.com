declare module '@xstyled/styled-components' {
  import _styled, {
    StyledComponent,
    ThemedStyledInterface,
    ThemedStyledFunction,
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

  // TODO: If styled-components default tags are overridden,
  // these will work
  // const styled: {
  //   [Key in keyof JSX.IntrinsicElements]: ThemedStyledFunction<
  //     Key,
  //     DefaultTheme,
  //     BoxProps
  //   >
  // }

  export const Box: ThemeStyledFunction<'div', DefaultTheme, BoxProps>

  export const breakpoints: (
    styles: BreakpointObject<FlattenSimpleInterpolation | string>,
  ) => TemplateStringsArray

  /** Support for xxBoxes, i.e. aBox, articleBox
   * List of dom elements from Styled Components:
   * https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/domElements.js */

  const styled: typeof _styled & {
    aBox: ThemeStyledFunction<'a', DefaultTheme, BoxProps>
    abbrBox: ThemeStyledFunction<'abbr', DefaultTheme, BoxProps>
    addressBox: ThemeStyledFunction<'address', DefaultTheme, BoxProps>
    areaBox: ThemeStyledFunction<'area', DefaultTheme, BoxProps>
    articleBox: ThemeStyledFunction<'article', DefaultTheme, BoxProps>
    asideBox: ThemeStyledFunction<'aside', DefaultTheme, BoxProps>
    audioBox: ThemeStyledFunction<'audio', DefaultTheme, BoxProps>
    bBox: ThemeStyledFunction<'b', DefaultTheme, BoxProps>
    baseBox: ThemeStyledFunction<'base', DefaultTheme, BoxProps>
    bdiBox: ThemeStyledFunction<'bdi', DefaultTheme, BoxProps>
    bdoBox: ThemeStyledFunction<'bdo', DefaultTheme, BoxProps>
    bigBox: ThemeStyledFunction<'big', DefaultTheme, BoxProps>
    blockquoteBox: ThemeStyledFunction<'blockquote', DefaultTheme, BoxProps>
    bodyBox: ThemeStyledFunction<'body', DefaultTheme, BoxProps>
    brBox: ThemeStyledFunction<'br', DefaultTheme, BoxProps>
    buttonBox: ThemeStyledFunction<'button', DefaultTheme, BoxProps>
    canvasBox: ThemeStyledFunction<'canvas', DefaultTheme, BoxProps>
    captionBox: ThemeStyledFunction<'caption', DefaultTheme, BoxProps>
    citeBox: ThemeStyledFunction<'cite', DefaultTheme, BoxProps>
    codeBox: ThemeStyledFunction<'code', DefaultTheme, BoxProps>
    colBox: ThemeStyledFunction<'col', DefaultTheme, BoxProps>
    colgroupBox: ThemeStyledFunction<'colgroup', DefaultTheme, BoxProps>
    dataBox: ThemeStyledFunction<'data', DefaultTheme, BoxProps>
    datalistBox: ThemeStyledFunction<'datalist', DefaultTheme, BoxProps>
    ddBox: ThemeStyledFunction<'dd', DefaultTheme, BoxProps>
    delBox: ThemeStyledFunction<'del', DefaultTheme, BoxProps>
    detailsBox: ThemeStyledFunction<'details', DefaultTheme, BoxProps>
    dfnBox: ThemeStyledFunction<'dfn', DefaultTheme, BoxProps>
    dialogBox: ThemeStyledFunction<'dialog', DefaultTheme, BoxProps>
    divBox: ThemeStyledFunction<'div', DefaultTheme, BoxProps>
    dlBox: ThemeStyledFunction<'dl', DefaultTheme, BoxProps>
    dtBox: ThemeStyledFunction<'dt', DefaultTheme, BoxProps>
    emBox: ThemeStyledFunction<'em', DefaultTheme, BoxProps>
    embedBox: ThemeStyledFunction<'embed', DefaultTheme, BoxProps>
    fieldsetBox: ThemeStyledFunction<'fieldset', DefaultTheme, BoxProps>
    figcaptionBox: ThemeStyledFunction<'figcaption', DefaultTheme, BoxProps>
    figureBox: ThemeStyledFunction<'figure', DefaultTheme, BoxProps>
    footerBox: ThemeStyledFunction<'footer', DefaultTheme, BoxProps>
    formBox: ThemeStyledFunction<'form', DefaultTheme, BoxProps>
    h1Box: ThemeStyledFunction<'h1', DefaultTheme, BoxProps>
    h2Box: ThemeStyledFunction<'h2', DefaultTheme, BoxProps>
    h3Box: ThemeStyledFunction<'h3', DefaultTheme, BoxProps>
    h4Box: ThemeStyledFunction<'h4', DefaultTheme, BoxProps>
    h5Box: ThemeStyledFunction<'h5', DefaultTheme, BoxProps>
    h6Box: ThemeStyledFunction<'h6', DefaultTheme, BoxProps>
    headBox: ThemeStyledFunction<'head', DefaultTheme, BoxProps>
    headerBox: ThemeStyledFunction<'header', DefaultTheme, BoxProps>
    hgroupBox: ThemeStyledFunction<'hgroup', DefaultTheme, BoxProps>
    hrBox: ThemeStyledFunction<'hr', DefaultTheme, BoxProps>
    htmlBox: ThemeStyledFunction<'html', DefaultTheme, BoxProps>
    iBox: ThemeStyledFunction<'i', DefaultTheme, BoxProps>
    iframeBox: ThemeStyledFunction<'iframe', DefaultTheme, BoxProps>
    imgBox: ThemeStyledFunction<'img', DefaultTheme, BoxProps>
    inputBox: ThemeStyledFunction<'input', DefaultTheme, BoxProps>
    insBox: ThemeStyledFunction<'ins', DefaultTheme, BoxProps>
    kbdBox: ThemeStyledFunction<'kbd', DefaultTheme, BoxProps>
    keygenBox: ThemeStyledFunction<'keygen', DefaultTheme, BoxProps>
    labelBox: ThemeStyledFunction<'label', DefaultTheme, BoxProps>
    legendBox: ThemeStyledFunction<'legend', DefaultTheme, BoxProps>
    liBox: ThemeStyledFunction<'li', DefaultTheme, BoxProps>
    linkBox: ThemeStyledFunction<'link', DefaultTheme, BoxProps>
    mainBox: ThemeStyledFunction<'main', DefaultTheme, BoxProps>
    mapBox: ThemeStyledFunction<'map', DefaultTheme, BoxProps>
    markBox: ThemeStyledFunction<'mark', DefaultTheme, BoxProps>

    /* This one breaks, it looks like marquee is not supported in JSX.IntrinsicElements */
    // marqueeBox: ThemeStyledFunction<'marquee', DefaultTheme, BoxProps>

    menuBox: ThemeStyledFunction<'menu', DefaultTheme, BoxProps>
    menuitemBox: ThemeStyledFunction<'menuitem', DefaultTheme, BoxProps>
    metaBox: ThemeStyledFunction<'meta', DefaultTheme, BoxProps>
    meterBox: ThemeStyledFunction<'meter', DefaultTheme, BoxProps>
    navBox: ThemeStyledFunction<'nav', DefaultTheme, BoxProps>
    noscriptBox: ThemeStyledFunction<'noscript', DefaultTheme, BoxProps>
    objectBox: ThemeStyledFunction<'object', DefaultTheme, BoxProps>
    olBox: ThemeStyledFunction<'ol', DefaultTheme, BoxProps>
    optgroupBox: ThemeStyledFunction<'optgroup', DefaultTheme, BoxProps>
    optionBox: ThemeStyledFunction<'option', DefaultTheme, BoxProps>
    outputBox: ThemeStyledFunction<'output', DefaultTheme, BoxProps>
    pBox: ThemeStyledFunction<'p', DefaultTheme, BoxProps>
    paramBox: ThemeStyledFunction<'param', DefaultTheme, BoxProps>
    pictureBox: ThemeStyledFunction<'picture', DefaultTheme, BoxProps>
    preBox: ThemeStyledFunction<'pre', DefaultTheme, BoxProps>
    progressBox: ThemeStyledFunction<'progress', DefaultTheme, BoxProps>
    qBox: ThemeStyledFunction<'q', DefaultTheme, BoxProps>
    rpBox: ThemeStyledFunction<'rp', DefaultTheme, BoxProps>
    rtBox: ThemeStyledFunction<'rt', DefaultTheme, BoxProps>
    rubyBox: ThemeStyledFunction<'ruby', DefaultTheme, BoxProps>
    sBox: ThemeStyledFunction<'s', DefaultTheme, BoxProps>
    sampBox: ThemeStyledFunction<'samp', DefaultTheme, BoxProps>
    scriptBox: ThemeStyledFunction<'script', DefaultTheme, BoxProps>
    sectionBox: ThemeStyledFunction<'section', DefaultTheme, BoxProps>
    selectBox: ThemeStyledFunction<'select', DefaultTheme, BoxProps>
    smallBox: ThemeStyledFunction<'small', DefaultTheme, BoxProps>
    sourceBox: ThemeStyledFunction<'source', DefaultTheme, BoxProps>
    spanBox: ThemeStyledFunction<'span', DefaultTheme, BoxProps>
    strongBox: ThemeStyledFunction<'strong', DefaultTheme, BoxProps>
    styleBox: ThemeStyledFunction<'style', DefaultTheme, BoxProps>
    subBox: ThemeStyledFunction<'sub', DefaultTheme, BoxProps>
    summaryBox: ThemeStyledFunction<'summary', DefaultTheme, BoxProps>
    supBox: ThemeStyledFunction<'sup', DefaultTheme, BoxProps>
    tableBox: ThemeStyledFunction<'table', DefaultTheme, BoxProps>
    tbodyBox: ThemeStyledFunction<'tbody', DefaultTheme, BoxProps>
    tdBox: ThemeStyledFunction<'td', DefaultTheme, BoxProps>
    textareaBox: ThemeStyledFunction<'textarea', DefaultTheme, BoxProps>
    tfootBox: ThemeStyledFunction<'tfoot', DefaultTheme, BoxProps>
    thBox: ThemeStyledFunction<'th', DefaultTheme, BoxProps>
    theadBox: ThemeStyledFunction<'thead', DefaultTheme, BoxProps>
    timeBox: ThemeStyledFunction<'time', DefaultTheme, BoxProps>
    titleBox: ThemeStyledFunction<'title', DefaultTheme, BoxProps>
    trBox: ThemeStyledFunction<'tr', DefaultTheme, BoxProps>
    trackBox: ThemeStyledFunction<'track', DefaultTheme, BoxProps>
    uBox: ThemeStyledFunction<'u', DefaultTheme, BoxProps>
    ulBox: ThemeStyledFunction<'ul', DefaultTheme, BoxProps>
    varBox: ThemeStyledFunction<'var', DefaultTheme, BoxProps>
    videoBox: ThemeStyledFunction<'video', DefaultTheme, BoxProps>
    wbrBox: ThemeStyledFunction<'wbr', DefaultTheme, BoxProps>

    // SVG
    circleBox: ThemeStyledFunction<'circle', DefaultTheme, BoxProps>
    clipPathBox: ThemeStyledFunction<'clipPath', DefaultTheme, BoxProps>
    defsBox: ThemeStyledFunction<'defs', DefaultTheme, BoxProps>
    ellipseBox: ThemeStyledFunction<'ellipse', DefaultTheme, BoxProps>
    foreignObjectBox: ThemeStyledFunction<
      'foreignObject',
      DefaultTheme,
      BoxProps
    >
    gBox: ThemeStyledFunction<'g', DefaultTheme, BoxProps>
    imageBox: ThemeStyledFunction<'image', DefaultTheme, BoxProps>
    lineBox: ThemeStyledFunction<'line', DefaultTheme, BoxProps>
    linearGradientBox: ThemeStyledFunction<
      'linearGradient',
      DefaultTheme,
      BoxProps
    >
    markerBox: ThemeStyledFunction<'marker', DefaultTheme, BoxProps>
    maskBox: ThemeStyledFunction<'mask', DefaultTheme, BoxProps>
    pathBox: ThemeStyledFunction<'path', DefaultTheme, BoxProps>
    patternBox: ThemeStyledFunction<'pattern', DefaultTheme, BoxProps>
    polygonBox: ThemeStyledFunction<'polygon', DefaultTheme, BoxProps>
    polylineBox: ThemeStyledFunction<'polyline', DefaultTheme, BoxProps>
    radialGradientBox: ThemeStyledFunction<
      'radialGradient',
      DefaultTheme,
      BoxProps
    >
    rectBox: ThemeStyledFunction<'rect', DefaultTheme, BoxProps>
    stopBox: ThemeStyledFunction<'stop', DefaultTheme, BoxProps>
    svgBox: ThemeStyledFunction<'svg', DefaultTheme, BoxProps>
    textBox: ThemeStyledFunction<'text', DefaultTheme, BoxProps>
    tspanBox: ThemeStyledFunction<'tspan', DefaultTheme, BoxProps>
  }
  export default styled
}

var footerObj = FHConfig.config.toolDetails.footer;

var FHFooterStyles = {
  backgroundColor: footerObj.footerBackgroundColor || '#88BCF8',
  height: 'auto',
  width: '100vw',
  display: 'block',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderBottomWidth: '1px',
  borderLeftWidth: '1px',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderBottomStyle: 'solid',
  borderLeftStyle: 'solid',
  borderTopColor: footerObj.footerBorders.footerBorderTopColor || '#88BCF8',
  borderRightColor: footerObj.footerBorders.footerBorderRightColor || '#88BCF8',
  borderBottomColor: footerObj.footerBorders.footerBorderBottomColor || '#88BCF8',
  borderLeftColor: footerObj.footerBorders.footerBorderLeftColor || '#88BCF8',
}

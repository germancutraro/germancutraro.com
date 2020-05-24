export default React.memo(
  ({ Component, href, size = '1.2em', onClick = () => window.open(href) }) => (
    <Component
      color='var(--iconColor)'
      size={size}
      style={{ margin: '5px', cursor: 'pointer' }}
      onClick={onClick}
    />
  )
);

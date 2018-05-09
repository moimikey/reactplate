import * as React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import App from '../..'

const HTML = ({ options, files }) => {
  const {
    appMountId,
    baseHref,
    faviconUrl
  } = options

  const __html = renderToStaticMarkup(React.createElement(App))

  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        { faviconUrl && <link rel='shortcut icon' href={faviconUrl} /> }
        { baseHref && <base href={baseHref} /> }
      </head>
      <body>
        <div id={appMountId} dangerouslySetInnerHTML={{ __html }} />
        { Array.from(files.chunks).map((chunk, i) => <script async key={i} src={files.chunks[chunk].entry} />) }
      </body>
    </html>
  )
}

const renderDocumentToString = props =>
  `<!doctype html>${renderToString(<HTML {...props} />)}`

export default function (props) {
  return renderDocumentToString(props.htmlWebpackPlugin)
}

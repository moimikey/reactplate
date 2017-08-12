import React, { createElement } from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import cxs from 'cxs'
import App from '../modules/app'

const HTML = ({ options, files }) => {
  const {
    appMountId,
    baseHref,
    faviconUrl,
    title
  } = options

  const __html = renderToString(createElement(App))
  const __criticalCss = [
    require('materialize-css/dist/css/materialize.css'),
    require('../critical.raw.css')
  ].join('\n')
  const __modulesCss = cxs.css

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        { faviconUrl && <link rel='shortcut icon' href={faviconUrl} /> }
        <link rel='stylesheet' href='//fonts.googleapis.com/icon?family=Material+Icons' />
        { files.css.map((css, i) => <link key={i} href={files.css[css]} rel='preload' as='style' onload="this.rel='stylesheet'" />) }
        { baseHref && <base href={baseHref} /> }
        { __criticalCss && <style>{ __criticalCss }</style> }
        { __modulesCss && <style>{ __modulesCss }</style> }
      </head>
      <body>
        <div id={appMountId} dangerouslySetInnerHTML={{ __html }} />
        { Array.from(files.chunks).map((chunk, i) => <script async key={i} src={files.chunks[chunk].entry} />) }
      </body>
    </html>
  )
}

const renderDocumentToString = props => `<!doctype html>${renderToStaticMarkup(<HTML {...props} />)}`

export default function (props) {
  cxs.reset()
  return renderDocumentToString(props.htmlWebpackPlugin)
}

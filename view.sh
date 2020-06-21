import 'https://unpkg.com/dior?module'
import { h, html, render, Component } from 'https://unpkg.com/spux?module'

render(
  html`
    <pre>${JSON.stringify(di.data, null, 2)}</pre>
  `,
  document.body
)

console.log(di.data)

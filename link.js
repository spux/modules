import 'https://unpkg.com/dataisland?module'
var _
( _ = new URL(di.data[0].uri)).protocol == 'data:' ? document.body.insertAdjacentHTML('beforeend',`<i
mg src="${_}">`) : document.location.href = _;

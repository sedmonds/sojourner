let mixmap = require('mixmap')
let regl = require('regl')
let glsl = require('glslify')
let resl = require('resl')

let mix = mixmap(regl, { } ) // http://regl.party/api
let map = mix.create() 

document.body.appendChild(mix.render({width: max-width, height: max-height }))

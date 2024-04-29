/* eslint-disable import/no-self-import */
require('esbuild').build({
  entryPoints: ['server.js'],
  bundle: true,
  minify: true,
  target: 'node18',
  platform: 'node',
  external: ['aws-sdk'],
  outdir: 'out',
});
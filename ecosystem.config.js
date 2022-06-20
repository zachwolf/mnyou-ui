module.exports = {
  apps: [
    {
      name: 'mnyou-ui',
      script: './node_modules/.bin/remix-serve',
      args: './build',
      out_file: '/dev/stdout',
      error_file: '/dev/stderr',
    },
    {
      name: 'nginx',
      script: './scripts/start.sh',
      out_file: '/dev/stdout',
      error_file: '/dev/stderr',
    },
  ],
}

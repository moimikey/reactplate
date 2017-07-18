import * as yarn from 'projector-yarn'
export async function build () {
  await yarn.run({ name: 'webpack', flags: ['-p --progress --config config/webpack'] })
}

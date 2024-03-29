import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      'https://staging-graphql.come-on.co/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'isitasecret',
        },
      },
    },
  ],
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
  // generates: {
  //   './src/gql/__generated__/': {
  //     documents: ['src/**/*.tsx', 'src/**/*.ts'],
  //     preset: 'client',
  //     plugins: [],
  //   },
  // },
}

export default config
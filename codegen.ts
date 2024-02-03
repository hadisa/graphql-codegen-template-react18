import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.API_URI,
  generates: {
    "src/gql": {
      preset: "client",
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
       config: {
         flattenGeneratedTypes: true,
         immutableTypes: true,
         withComponent: true,
         withHOC: true,
         withHooks: true,
         withMutationFn: true,
         withRefetchFn: false,
         withResultType: true

       },
    },
    './introspection.json': {
      plugins: ['introspection']
    },
    './schema.graphql': {
      plugins: ['schema-ast']
    }
  }
}
 
export default config
import { gql } from "@/__generated__/gql";
import { User } from "../fragments";
import { DocumentNode } from "graphql";


export const GET_CURRENT_USER = gql(`query GetCurrentUser($id: uuid!) {
    register_profile_by_pk(id: $id) {
        ...User
    }
  }
  ${User}
`);
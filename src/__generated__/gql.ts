/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment User on register_profile {\n        id\n        img\n        firstName: first_name\n        lastName: last_name\n        birthDate: birthday\n        username\n        email\n        phone\n        lattitude\n        longitude\n        mangoCustomerId\n        mangoWalletId\n        billingAddress\n        is_staff\n        online\n        hasNotifsOn\n        canCreateEntities: can_create_entities\n        friends_count: friends_aggregate(\n            where: { active: { _eq: true }, friendLink_id: { _is_null: true } }\n        ) {\n            aggregate {\n            count\n            }\n        }\n    }\n": types.UserFragmentDoc,
    "query GetCurrentUser($id: uuid!) {\n    register_profile_by_pk(id: $id) {\n        ...User\n    }\n  }\n  \n": types.GetCurrentUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment User on register_profile {\n        id\n        img\n        firstName: first_name\n        lastName: last_name\n        birthDate: birthday\n        username\n        email\n        phone\n        lattitude\n        longitude\n        mangoCustomerId\n        mangoWalletId\n        billingAddress\n        is_staff\n        online\n        hasNotifsOn\n        canCreateEntities: can_create_entities\n        friends_count: friends_aggregate(\n            where: { active: { _eq: true }, friendLink_id: { _is_null: true } }\n        ) {\n            aggregate {\n            count\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment User on register_profile {\n        id\n        img\n        firstName: first_name\n        lastName: last_name\n        birthDate: birthday\n        username\n        email\n        phone\n        lattitude\n        longitude\n        mangoCustomerId\n        mangoWalletId\n        billingAddress\n        is_staff\n        online\n        hasNotifsOn\n        canCreateEntities: can_create_entities\n        friends_count: friends_aggregate(\n            where: { active: { _eq: true }, friendLink_id: { _is_null: true } }\n        ) {\n            aggregate {\n            count\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetCurrentUser($id: uuid!) {\n    register_profile_by_pk(id: $id) {\n        ...User\n    }\n  }\n  \n"): (typeof documents)["query GetCurrentUser($id: uuid!) {\n    register_profile_by_pk(id: $id) {\n        ...User\n    }\n  }\n  \n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
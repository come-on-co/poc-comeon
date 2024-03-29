import { gql } from "@/__generated__/gql";

export const User = gql(`
    fragment User on register_profile {
        id
        img
        firstName: first_name
        lastName: last_name
        birthDate: birthday
        username
        email
        phone
        lattitude
        longitude
        mangoCustomerId
        mangoWalletId
        billingAddress
        is_staff
        online
        hasNotifsOn
        canCreateEntities: can_create_entities
        friends_count: friends_aggregate(
            where: { active: { _eq: true }, friendLink_id: { _is_null: true } }
        ) {
            aggregate {
            count
            }
        }
    }
`);
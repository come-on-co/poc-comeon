// lib/client.js
import { InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "https://staging-graphql.come-on.co/v1/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJraWQiOiJkLTE3MTA5NTgyODI5OTMiLCJ0eXAiOiJKV1QiLCJ2ZXJzaW9uIjoiNCIsImFsZyI6IlJTMjU2In0.eyJpYXQiOjE3MTE0Njc0ODgsImV4cCI6MTcxMTU1Mzg4OCwic3ViIjoiYTA2ZGE0NDgtZTc1Zi00ZDBiLTgxYzMtODE5YWQ4ZWE1ZGFlIiwidElkIjoicHVibGljIiwic2Vzc2lvbkhhbmRsZSI6IjYzM2QyZjgzLTkzYTMtNDUxNi1hYTBhLTgzMDRjN2EzMGYwNyIsInJlZnJlc2hUb2tlbkhhc2gxIjoiOGVkOWJkMzZhMjMwNzI2Zjk0OWE3YWM4NTUyYzFmMzVkZWIwNDEwOTViYzVmZWMxNTc5YTYzNzY4NWJlNWU3MyIsInBhcmVudFJlZnJlc2hUb2tlbkhhc2gxIjpudWxsLCJhbnRpQ3NyZlRva2VuIjpudWxsLCJpc3MiOiJodHRwczovL3N0YWdpbmctYXV0aC5jb21lLW9uLmNvL2F1dGgiLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6ImEwNmRhNDQ4LWU3NWYtNGQwYi04MWMzLTgxOWFkOGVhNWRhZSJ9fQ.YZR6_jK9LciE-Pc4M3VBaFGyKjRWP44cxRwXjOuwQzCYTov0yyargP4iUIFLODFXbojAWsBL25cIGe9Po_-ylYBbDB_4TviSUPlnklkL57o6Ic0AXqjMRYVXRY5lW9cyfI0rubceYyUJvpdwK0Ip8pnfEgoSWXlF21-wSb5FAGOAQLv3Oae6X6qPFS3ucHk4HyWNS7jPj_fewr_kWnHvvCOhtM-rj50JiNzhI5VnbvFHbim6JJmcSmhPeZAwfdr_DfuRxI0fcIcDoZUbFEAuUT-KDkjRbgRN0l3jC_KNdpISVlRCZFN3sG9b-l2ognO_RLZ-Jh0XOKnsShZicrUDvQ`
    }
  };
});

export const getClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: "https://main--time-pav6zq.apollographos.net/graphql",
//     }),
//   });
// });
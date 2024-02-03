import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/index.css'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider } from './components/providert/theme-provider.tsx';

const host = import.meta.env.VITE_API_HOST;
const token = import.meta.env.VITE_API_TOKEN;

const authLink = setContext((_, { headers }) => {
  return { headers: { ...headers, authorization: token ? `Bearer ${token}` : '' } };
});

const httpLink = createHttpLink({ uri: host });
const client = new ApolloClient({ cache: new InMemoryCache(), link: authLink.concat(httpLink) });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
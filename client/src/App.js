import {BrowserRouter, Routes, Route,} from "react-router-dom"
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'

import './App.css';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

import Auth from "./utils/auth";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: red[700],
    },
  },
});

const authLink = setContext((_, {headers}) => {
  const token = Auth.getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

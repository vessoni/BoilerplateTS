import React from 'react';

// Styles
import { Title } from './styles';

// Why const Arrow Function? -> With TypeScript is more simple to
// declare the type of component

// Dashboard is a Function component
const Dashboard: React.FC = () => {
  return <Title> Expore Repositorys on Github </Title>;
};

export default Dashboard;

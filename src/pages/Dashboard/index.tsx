import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

// Styles
import { Title, Form, Repositories } from './styles';

// Why const Arrow Function? -> With TypeScript is more simple to
// declare the type of component

// Dashboard is a Function component
const Dashboard: React.FC = () => {
  return (
    <>
      <Title> Exporer Repositorys on Github </Title>

      <Form action="">
        <input placeholder="Type repository name" />
        <button type="submit"> Search </button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/4910383?s=460&u=83c4a27c7b7242163c6568a7e0535519ecde2eba&v=4"
            alt="Alex"
          />
          <div>
            <strong>alexandre/oi</strong>
            <p> ASDKOASKDOASKOKOASDKAD</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/4910383?s=460&u=83c4a27c7b7242163c6568a7e0535519ecde2eba&v=4"
            alt="Alex"
          />
          <div>
            <strong>alexandre/oi</strong>
            <p> ASDKOASKDOASKOKOASDKAD</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

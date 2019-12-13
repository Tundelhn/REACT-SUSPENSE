import React from 'react';
import './App.css';
const Person = props => {
  const { job, name, img } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: 'ayodele tunde',
      job: ' software developer'
    },
    {
      img: 40,
      name: 'ayodele seyi',
      job: ' front-end developer'
    },
    {
      img: 70,
      name: 'ayodele olumide',
      job: ' back-end developer'
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
        consequatur, harum iste temporibus veritatis illum, ducimus velit illo
        officia vero accusamus nisi placeat dignissimos dolores, corrupti amet
        molestias inventore ipsam?
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

const App = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          backgroundColor: '#f4f4f4',
          width: '80%',
          margin: 'auto',
          color: 'teal',
          marginTop: '2rem',
          padding: '10px',
          boxShadow: '2px 5px 10px rgba(0,0,0,0.3)',
          textTransform: 'capitalized',
          transition: 'all 0.3s linear'
        }}>
        List Of Persons
      </h1>
      <PersonList />
    </div>
  );
};

export default App;

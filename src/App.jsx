const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      {/* <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} /> */}

      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {/* {props.part} {props.exercises} */}
      {props.part}
    </p>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {/* {props.exercises1 + props.exercises2 + props.exercises3} */}
        {props.total}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  // const part2 = "Using props to pass data";
  // const exercises2 = 7;

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };

  // const part3 = "State of a component";
  // const exercises3 = 14;

  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content
        // part1={part1}
        // part2={part2}
        // part3={part3}
        // exercises1={exercises1}
        // exercises2={exercises2}
        // exercises3={exercises3}

        part1={part1.name + " " + part1.exercises}
        part2={part2.name + " " + part2.exercises}
        part3={part3.name + " " + part3.exercises}
      />
      <Total
        // exercises1={exercises1}
        // exercises2={exercises2}
        // exercises3={exercises3}

        total={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;

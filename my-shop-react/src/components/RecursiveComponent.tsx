let count: number = 0;

const RecursiveComponent = (props) => {
  let { obj, count } = props;
  obj = { ...obj };
  return (
    <div className={`${count === 0 ? "" : "pl-10"}`}>
      {Object.keys(obj).map(function (key) {
        if (typeof obj[key] === "object") {
          if (Array.isArray(obj[key]) && obj[key].length) {
            count++;
          }
          return (
            <RecursiveComponent
              key={Math.random()}
              obj={obj[key]}
              count={count}
            />
          );
        }
        if (key === "en") {
          return (
            <div
              className={`${count === 0 ? "bg-green-500" : "bg-red-500"} my-5`}
              key={Math.random()}
            >
              {count} == {obj[key]}
            </div>
          );
        }
      })}
    </div>
  );
};

export default RecursiveComponent;

import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person={name:'', age:0}
  const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if(nameRef.current !==null)
        //   console.log(nameRef.current.value);
          person.name=nameRef.current.value;
      if (ageRef.current !== null)
        //   console.log(ageRef.current.value);
          person.age = parseInt(ageRef.current.value);
      console.log(person)
      
  };
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" ref={nameRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input type="number" className="form-control" id="age" ref={ageRef} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;




function Form_Lable({ htmlFor, lable ,required=false}) {
  return (
    <>
      <label htmlFor={htmlFor} className="form-label">
        {lable}
      </label>
    </>
  );
}

export default Form_Lable;



function Form_Input_Addon({ id, value, size ="sm"}) {
  return (
    <>
      <span className={`input-group-text `} id={id}>
        {value}
      </span>
    </>
  );
}

export default Form_Input_Addon;

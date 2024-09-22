import From_Error from "./Form_Error";
import Form_Help_Text from "./Form_Help_Text";
import Form_Input_Addon from "./Form_Input_Addon";
import Form_Lable from "./Form_Lable";

function Form_Input({
  size = "sm",
  placeholder = "",
  name,
  required = false,
  areaLable = "",
  lable = "",
  id = "0",
  position = "prepend",
  grouped = false,
}) {
  return (
    <>
      <div className="mb-3">
        {lable && (
          <Form_Lable htmlFor={id} lable={lable} required={required} />
        )}

        <div className={`input-group input-group-${size}`}>
          {(position == "prepend" && grouped )&& (
            <Form_Input_Addon value="mes" id="$prepend" />
          )}

          <input
            type={"text"}
            className={`form-control form-control-${size}`}
            placeholder={placeholder}
            name={name}
            required={required && true}
          />

          {position == "append" && (
            <Form_Input_Addon value="mes" id="$prepend" />
          )}

          {/* <Form_Input_Addon value="$append" id="" /> */}

          <From_Error msg="$key" />
        </div>

        {/* <Form_Help_Text id={id}>f</Form_Help_Text> */}
      </div>
    </>
  );
}

export default Form_Input;

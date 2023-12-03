import theme from "../../theme/theme";









const TextField = (props: any) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      required={props.required ? true : false}
      style={{
        padding: "1rem",
        boxSizing: "border-box",
        width: "100%",
        borderRadius: "10px",
        outline: "none",
        border: "none",
        marginBottom: "10px",
        fontSize: theme.body_font,
      }}
    />
  );
};






export default TextField;
import {
  Option,
  OptionIcon,
  OptionText,
} from "../../components/TextEditor/style";
import { editOptions } from "../constants/TextEditData";

export const drawEditOptions = () => {
  return editOptions.map(({ icon, text }) => (
    <Option key={text}>
      <OptionIcon>
        <img src={icon} alt={text} />
      </OptionIcon>
      <OptionText>{text}</OptionText>
    </Option>
  ));
};

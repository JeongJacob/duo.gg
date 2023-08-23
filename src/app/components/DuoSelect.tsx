"use client";
import {
  handleSelectQueueTab,
  handleSelectTierTab,
} from "@/redux/features/selectTabSlice";
import { useDispatch } from "react-redux";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
} from "react-select";

interface SelectType {
  readonly value: string;
  readonly label: string;
}

interface DefaultValueType {
  value: string;
  label: string;
}
export default function DuoSelectModal({
  type,
  width,
  isQueue,
  defaultValue,
}: {
  type: SelectType[];
  width: string;
  isQueue: boolean;
  defaultValue: DefaultValueType;
}) {
  const dispatch = useDispatch();
  const handleSelectValue = (selectValue: string) => {
    if (isQueue) dispatch(handleSelectQueueTab(selectValue));
    else dispatch(handleSelectTierTab(selectValue));
  };

  const customStyles = {
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      width: width,
      backgroundColor: "#19191a;",
      fontColor: "white",
      borderColor: "#19191a;",
      border: "1px solid rgb(91, 91, 91)",
      borderRadius: "5px",
    }),
    option: (
      base: CSSObjectWithLabel,
      state: OptionProps<
        {
          value: string;
          label: string;
        },
        false,
        GroupBase<{
          value: string;
          label: string;
        }>
      >
    ) => ({
      ...base,
      backgroundColor: state.isFocused ? "grey" : "transparent",
      color: state.isFocused ? "white" : "#19191a",
    }),
    singleValue: (base: CSSObjectWithLabel) => ({
      ...base,
      color: "white",
    }),
  };
  return (
    <Select
      options={type}
      styles={customStyles}
      defaultValue={defaultValue}
      onChange={(selectValue) =>
        selectValue && handleSelectValue(selectValue.value)
      }
    />
  );
}

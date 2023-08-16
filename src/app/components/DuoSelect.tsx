import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
} from "react-select";

export default function DuoSelectModal({ type }: { type: string }) {
  const queueOptions = [
    { value: "모든 큐", label: "모든 큐" },
    { value: "솔로랭크", label: "솔로랭크" },
    { value: "자유랭크", label: "자유랭크" },
    { value: "일반게임", label: "일반게임" },
    { value: "칼바람 협곡", label: "칼바람 협곡" },
  ];

  const tierOptions = [
    { value: "모든 티어", label: "모든 티어" },
    { value: "아이언", label: "아이언" },
    { value: "브론즈", label: "브론즈" },
    { value: "실버", label: "실버" },
    { value: "골드", label: "골드" },
    { value: "에메랄드", label: "에메랄드" },
    { value: "다이아몬드", label: "다이아몬드" },
  ];

  const customStyles = {
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      width: type === "queue" ? "180px" : "160px",
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
      options={type === "queue" ? queueOptions : tierOptions}
      styles={customStyles}
      defaultValue={type === "queue" ? queueOptions[0] : tierOptions[0]}
    />
  );
}

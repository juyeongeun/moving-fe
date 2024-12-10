import React from "react";
import CheckBoxButton from "@/components/RequestCheckboxField/CheckboxButton";
import CheckboxField from "@/components/RequestCheckboxField/CheckboxField";

interface StepSelectionFieldProps {
  options: Array<{
    text: string;
    value: string;
  }>;
  onSelect: (value: string) => void;
  type?: "custom" | "admin";
  radius?: string | number;
}

const StepSelectionField: React.FC<StepSelectionFieldProps> = ({
  options,
  onSelect,
  type = "admin",
  radius = "24px",
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

  const borderRadiusStyles = {
    borderTopLeftRadius: type === "custom" ? radius : "0",
    borderTopRightRadius: type === "custom" ? "0" : radius,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: radius,
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div
      style={{
        display: "inline-block",
        boxShadow: "2px 2px 8px 0px #E0E0E033",
        ...borderRadiusStyles,
      }}
      className="bg-white p-6 space-y-4"
      role="radiogroup"
    >
      {options.map((option) => (
        <CheckboxField
          key={option.value}
          text={option.text}
          value={option.value}
          isSelected={selectedValue === option.value}
          onSelect={handleSelect}
        />
      ))}
      <CheckBoxButton
        variant="primary"
        onClick={() => selectedValue && onSelect(selectedValue)}
        disabled={!selectedValue}
        className="w-full mt-4"
      >
        선택완료
      </CheckBoxButton>
    </div>
  );
};

export default StepSelectionField;

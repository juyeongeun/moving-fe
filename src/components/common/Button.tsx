import React from "react";

interface ButtonProps {
  onClick: () => void;
  width?: string | number;
  height?: string | number;
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outlined";
  type?: "button" | "submit" | "reset";
  className?: string;
}

/**
 * 범용적으로 사용할 수 있는 Button 컴포넌트
 *
 * @example
 * // 기본 사용법
 * <Button onClick={() => console.log('clicked')}>Click me</Button>
 *
 * // variant 설정
 * <Button variant="primary">Primary Button</Button>
 * <Button variant="secondary">Secondary Button</Button>
 * <Button variant="outlined">Outlined Button</Button>
 *
 * // 크기 커스터마이징
 * <Button width="200px" height="50px">Custom Size</Button>
 *
 * // 비활성화
 * <Button disabled>Disabled Button</Button>
 *
 * @param {Function} onClick - 클릭 이벤트 핸들러
 * @param {string|number} [width] - 버튼의 너비 (px, rem, % 등 단위 포함)
 * @param {string|number} [height] - 버튼의 높이 (px, rem, % 등 단위 포함)
 * @param {React.ReactNode} children - 버튼 내부 콘텐츠
 * @param {boolean} [disabled] - 버튼 비활성화 여부
 * @param {'primary'|'secondary'|'outlined'} [variant] - 버튼 스타일 변형
 * @param {'button'|'submit'|'reset'} [type] - 버튼의 HTML type 속성
 * @param {string} [className] - 추가 스타일링을 위한 클래스명
 */

const Button = ({
  onClick,
  width = "auto",
  height = "auto",
  children,
  disabled = false,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps): JSX.Element => {
  const variantClasses = {
    primary:
      "bg-pr-blue-200 text-gray-50 text-lg rounded-[16px] font-semibold p-4 hover:bg-pr-blue-300",
    secondary:
      "bg-pr-blue-200 text-gray-50 text-lg rounded-[16px] font-semibold p-4 hover:bg-pr-blue-300",
    outlined:
      "bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-100",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`button ${variantClasses[variant]} ${className} 
        ${
          disabled
            ? "bg-gray-100 text-gray-50 text-lg rounded-[16px] font-semibold p-4 cursor-not-allowed"
            : "cursor-pointer"
        } 
        w-${width} h-${height}`}
    >
      {children}
    </button>
  );
};

export default Button;

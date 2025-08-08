interface IconDownArrowProps {
  className?: string;
}

export default function IconDownArrow({ className = "" }: IconDownArrowProps) {
    return (
        <svg
            className={className}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.25 6.375L9 11.625L3.75 6.375"
                stroke="#008ECC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
import s from "./Search.module.scss"

type IconSearchProps = {
  color: string;
  setIsMobile: (param: boolean) => void;
};

const IconSearch: React.FC<IconSearchProps> = ({ color, setIsMobile }): JSX.Element => {

  const toggleHandler = () => {
    setIsMobile(false)
  }

  return (
    <svg
      className={s.inputSearch}
      onClick={toggleHandler}
      width="25"
      height="25"
      fill={color}
      viewBox="0 0 19 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.3805 11H12.5905L12.3105 10.73C13.2905 9.59 13.8805 8.11 13.8805 6.5C13.8805 2.91 10.9705 0 7.38049 0C3.79049 0 0.880493 2.91 0.880493 6.5C0.880493 10.09 3.79049 13 7.38049 13C8.99049 13 10.4705 12.41 11.6105 11.43L11.8805 11.71V12.5L16.8805 17.49L18.3705 16L13.3805 11ZM7.38049 11C4.89049 11 2.88049 8.99 2.88049 6.5C2.88049 4.01 4.89049 2 7.38049 2C9.87049 2 11.8805 4.01 11.8805 6.5C11.8805 8.99 9.87049 11 7.38049 11Z" />
    </svg>
  );
};
export default IconSearch;

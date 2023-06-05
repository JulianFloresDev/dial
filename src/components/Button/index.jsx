'use client';

const Button = ({
  children = 'Button whitout text',
  onClick = () => {},
  variant = 'primary',
  ...props
}) => {
  const variants = {
    primary: 'bg-detail-blue hover:bg-detail-blue-hover text-white-700',
    white: 'bg-white-700 hover:bg-gray-200 text-detail-blue',
  };
  return (
    <button
      className={`px-4 py-3 rounded-3xl flex font-bold text-lg text-center tracking-tight uppercase ${variants[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

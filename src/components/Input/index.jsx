import PropTypes from 'prop-types';

const Input = ({
  name = 'nombre',
  type = 'text',
  placeholder = 'placeholder',
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="px-4 py-3 min-w-[360px] flex items-center leading-none text-black-700 bg-gray-200 rounded-3xl outline-none border-2 border-gray-200 focus:border-detail-blue"
      {...props}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;

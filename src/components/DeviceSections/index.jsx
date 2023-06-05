'use client';

import styles from './styles.module.css';
import Image from 'next/image';

const items = [
  {
    name: 'daya',
  },
  {
    name: 'mathew',
  },
  {
    name: 'gabriela',
  },
  {
    name: 'latifha',
  },
  {
    name: 'chris',
  },
];

const DeviceSections = () => {
  return (
    <fieldset
      id="phoneImages"
      className="w-full h-fit flex justify-evenly items-center overflow-hidden"
    >
      {items.map((item, index) => {
        return (
          <div key={index} className={styles.container}>
            <Image
              src={`/assets/images/device-${item.name}.png`}
              alt={`device ${item.name}`}
              width={330}
              height={663}
              className={styles.device}
            />
            <input
              type="radio"
              id={item.name}
              name="phoneImages"
              className={styles.checkbox}
            />
            <label htmlFor={item.name} className={styles.circle}>
              <Image
                src={`/assets/images/${item.name}.png`}
                alt={`${item.name}`}
                width={250}
                height={250}
                className="p-7 aspect-square w-full"
              />
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default DeviceSections;

'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import { useRef } from 'react';

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
  const groupRef = useRef(<div></div>);
  const movementIndex = Math.round(items.length / 2) - 1;

  const handleTransform = (num) => {
    if (window.innerWidth > 768) {
      const minTranslation = window.innerWidth / 2 - 145;
      const translation = minTranslation - 330 * num;
      groupRef.current.style.transform = `translateX(${translation}px)`;
    }
  };

  return (
    <div className={styles.blockContainer}>
      <div id="phoneImages" className={styles.group} ref={groupRef}>
        {items.map((item, index) => {
          return (
            <div key={index} className={styles.container}>
              <Image
                priority
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
              <label
                htmlFor={item.name}
                className={styles.circle}
                onClick={() => handleTransform(index)}
              >
                <Image
                  priority
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
      </div>
    </div>
  );
};

export default DeviceSections;

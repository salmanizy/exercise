import React, { useMemo } from 'react';

const Jumlah = (props) => {

  const sum = useMemo(() => {
    if (props.arr) {
      return props.arr.reduce((total, num) => total + num, 0);
    }
    return 0;
  }, [props.arr]);

  return (
    <div>
      Jumlah: {sum}
    </div>
  );
};

export default Jumlah;

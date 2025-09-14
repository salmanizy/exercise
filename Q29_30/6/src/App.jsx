import React, { useEffect } from 'react';

function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log("Component has mounted");

      return () => {
        console.log("Component will unmount!");
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}

function MyComponent() {
  return (
    <div>
      Belajar HOC!
    </div>
  );
}

export default withLogger(MyComponent);

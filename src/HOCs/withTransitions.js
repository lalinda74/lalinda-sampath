import React from 'react';

function withTransitions (WrappedComponent, options) {
  return function NewComponent (props) {
    const [ref, setRef] = React.useState(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        console.log('true');
        if (visible === false) {
          setVisible(entry.isIntersecting);
        }
      }, options);

      if (ref) {
        observer.observe(ref);
      }

      return () => {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    }, [ref, options, visible]);

    return <WrappedComponent transition = {setRef} visible = {visible} {...props} />;
  };
}

export default withTransitions;

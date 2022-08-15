import { useState, useEffect } from 'react';
export const useFade = (initial) => {
  const [show, setShow] = useState(initial);
  const [isVisible, setVisible] = useState(show);

  // Update visibility when show changes
  useEffect(() => {
    if (show) setVisible(true);
  }, [show]);

  // When the animation finishes, set visibility to false
  const onAnimationEnd = () => {
    if (!show) setVisible(false);
  };

  const style = {
    animation: `${show ? 'fadeIn' : 'fadeOut'} 1s ease-in`,
    transition: `${show ? 'fadeIn' : 'fadeOut'} all 1s ease-out`,
  };

  // These props go on the fading DOM element
  const fadeProps = {
    style,
    onAnimationEnd,
  };

  return [isVisible, setShow, fadeProps];
};

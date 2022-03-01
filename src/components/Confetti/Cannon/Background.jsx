import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setConfetti} from "../../../redux/actions/confetti";

const Background = () => {
  const dispatch = useDispatch();

  const { backgroundState } = useSelector(
    ({ backgroundReducer }) => backgroundReducer
  );

  const handleSelectBackground = (img, name) => () => {
    dispatch(setConfetti({ img, name }));
  };

  return (
    <div>
432
    </div>
  );
};

export default Background;
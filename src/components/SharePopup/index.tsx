import React from 'react';

import { 
  DialogFormContainer, PopUpContainer, FacebookButton, TwitterButton, PinterestButton, Dialog
} from './styles';

interface Props {
  isActive?: boolean;
}

const SharePopup: React.FC<Props> = ({ isActive }) => {
  return (
    <DialogFormContainer className={isActive ? 'active' : ''}>
      <PopUpContainer>
        <strong>Share</strong>
        <FacebookButton />
        <TwitterButton />
        <PinterestButton />
      </PopUpContainer>
      <Dialog />
    </DialogFormContainer>
  );
};

export default SharePopup;

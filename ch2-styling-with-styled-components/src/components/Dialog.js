import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Button from './Button';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out; /* 처음에 빨랐다가 나중에 느려짐 */
  animation-name: ${fadeIn};
  animation-fill-mode: forwards; /* 애니메이션이 끝나고 그 상태를 유지 */

  ${(props) =>
    props.disapper &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out; /* 처음에 빨랐다가 나중에 느려짐 */
  animation-name: ${slideUp};
  animation-fill-mode: forwards; /* 애니메이션이 끝나고 그 상태를 유지 */

  ${(props) =>
    props.disapper &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const Dialog = ({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel,
}) => {
  // 현재 animation 보여주는 중이라는 뜻
  const [animate, setAnimate] = useState(false);
  // dialog 자체적으로 관리하는 visible값
  // props로 받아온 visible에 따라 함께 바뀜
  // visible이 true에서 false로 변환되는 시점을 캐치해내기 위해서 만든것
  const [localVisible, setLocalVisible] = useState(visible);

  // ! 1. 컴포넌트가 마운트될떄 effect 실행
  // ! 1-1. localVisible: false, visible: false
  // ! 3. dialog(visible)의 상태가 바뀌어 리렌더링 및 업데이트되면서 effect실행
  // ! 6. dialog(visible)의 상태가 다시 바뀌어 리렌더링 및 업데이트되면서 effect실행
  useEffect(() => {
    // visible true(dialog가 열린상태) -> false(dialog가 꺼진상태)가 되는 것을 감지
    console.log('localVisible상태:', localVisible);
    console.log('visible상태:', visible);
    console.log('------------------------');
    // ! 4. localVisible: false, visible: true이므로 조건 성립이 안되어 if문이 실행되지 않고
    // ! 7. localVisible: true, visible: false이므로 조건 성립
    if (localVisible && !visible) {
      // ! 7-1. animate: true
      setAnimate(true); // animation 시작
      // ! 7-2. animate: false
      setTimeout(() => setAnimate(false), 250); // 0.25s뒤에 animatin 끝
    }
    // ! 4-1. setLocalVisible을 통해 localvisible false -> true로 변경
    // ! 4-2. localVisible: true, visible: true
    // ! 8. localVisible: false, visible: false
    setLocalVisible(visible);
  }, [localVisible, visible]);

  // // 컴포넌트가 처음 나타났을 때부터 code가 실행된다.
  // useEffect(() => {
  //   if (!visible) {
  //     // code
  //   }
  // }, [visible]);

  // ! 4-3. 조건이 성립되지 않아 null이 아닌 아래의 return값을 보여줌
  // ! 9. 조건 성립으로 return null;
  if (!localVisible && !animate) return null;

  return (
    <DarkBackground disapper={!visible}>
      <DialogBlock disapper={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
};

Dialog.defaultProps = {
  cancelTExt: '취소',
  confirmText: '확인',
};

export default Dialog;

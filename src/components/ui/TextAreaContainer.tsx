import React from 'react';
import styled from 'styled-components';

interface TextAreaContainerProps {
  children: React.ReactNode;
}

const StyledWrapper = styled.div`
  .card-container {
    position: relative;
    width: 400px;
    height: 300px;
    border-radius: 1em;
    margin: 0 2em;
    background: #1e1e1e; /* Add background color */
  }

  .card-border {
    position: absolute;
    inset: 0;
    background: transparent; /* Remove background */
    border-radius: inherit;
  }

  .card {
    position: absolute;
    inset: 0.125em;
    border-radius: 0.875em;
    z-index: 0;
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
  }

  .spin {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }

  .spin-blur {
    filter: blur(2em) url(#unopaq);
  }

  .spin-intense {
    inset: -0.125em;
    filter: blur(0.3em) url(#unopaq2);
    border-radius: 0.75em;
  }

  .spin-inside {
    inset: -6px;
    border-radius: inherit;
    filter: blur(0px) url(#unopaq3);
    z-index: 0;
  }

  .spin::before {
    content: "";
    position: absolute;
    inset: -30%;
    animation: speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite;
  }

  .spin-blur::before {
    background: linear-gradient(-45deg, #f50, #0000 46% 54%, #05f);
  }

  .spin-intense::before {
    background: linear-gradient(-45deg, #f95, #0000 35% 65%, #59f);
  }

  .spin-inside::before {
    background: linear-gradient(-45deg, #fc9, #0000 35% 65%, #9cf);
  }

  @keyframes speen {
    0% {
      rotate: 10deg;
    }
    50% {
      rotate: 190deg;
    }
    to {
      rotate: 370deg;
    }
  }
`;

const TextAreaContainer: React.FC<TextAreaContainerProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 0" />
          </filter>
          <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0" />
          </filter>
          <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 1 0 0 1 0 1 0 0 0 1 1 0 0 0 0 2 0" />
          </filter>
        </svg>
        <div className="spin spin-blur" />
        <div className="spin spin-intense" />
        <div className="card-border">
          <div className="spin spin-inside" />
        </div>
        <div className="card">{children}</div>
      </div>
    </StyledWrapper>
  );
};

export default TextAreaContainer;